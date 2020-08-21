from flask import jsonify, Flask, Response
import json
import requests

from utils import DataManager

app = Flask(__name__)

TARGET_URL = "https://data.covid19japan.com/summary/latest.json"


@app.route('/download', methods=['GET'])
def index():
    try:
        response = requests.get(url=TARGET_URL)
        str_res = response.content.decode("utf-8")
        obj = json.loads(str_res)
        DataManager.remove_non_labels(data=obj["prefectures"])
        data = {"ConfirmedCumulative": DataManager.ConfirmedCumulative(obj),
                "RecoveredCumulative": DataManager.RecoveredCumulative(obj),
                "DeceasedCumulative": DataManager.DeceasedCumulative(obj),
                "ActiveCumulative": DataManager.ActiveCumulative(obj),
                "TestedCumulative": DataManager.TestedCumulative(obj),

                "date_label": [i["date"][5:].replace("-", "/") for i in obj["daily"]],

                "Bar_data": [i["confirmed"] for i in obj["daily"]],
                "Top10Prefectures": [
                    {
                        "id": i + 1,
                        "prefecture": obj["prefectures"][i]["name_ja"],
                        "amount": obj["prefectures"][i]["confirmed"],
                        "compYesterday": obj["prefectures"][i]["yesterdayConfirmed"],
                        "confirmed_graph": [sum(obj["prefectures"][i]["dailyConfirmedCount"][:k]) for k in
                                            range(len(obj["prefectures"][i]["dailyConfirmedCount"]))
                                            ]}
                    for i in range(10)
                ]}
        return Response(response=json.dumps(data), status=200)
    except:
        return Response(status=400)


@app.errorhandler(404)
def page_not_found(error):
    return jsonify({'error': {
        'code': 'Not found',
        'message': 'Page not found.'
    }}), 404


if __name__ == '__main__':
    app.run()
