import math


class DataManager(object):
    @classmethod
    def remove_non_labels(cls, data):
        try:
            for i in range(len(data)):
                if data[i]["name_ja"] in ["不明", "ダイヤモンド・プリンセス", "空港検疫"]:
                    data.pop(i)
        except IndexError:
            pass

    @classmethod
    def ConfirmedCumulative(cls, obj):
        return {"confirmedCumulative": obj["daily"][-1]["confirmedCumulative"],
                "confirmed": obj["daily"][-1]["confirmed"]}

    @classmethod
    def RecoveredCumulative(cls, obj):
        return {"recoveredCumulative": obj["daily"][-1]["recoveredCumulative"],
                "recovered": obj["daily"][-1]["recovered"]}

    @classmethod
    def DeceasedCumulative(cls, obj):
        return {"deceasedCumulative": obj["daily"][-1]["deceasedCumulative"],
                "deceased": obj["daily"][-1]["deceased"]}

    @classmethod
    def ActiveCumulative(cls, obj):
        return {"activeCumulative": obj["daily"][-1]["activeCumulative"],
                "active": obj["daily"][-1]["active"]}

    @classmethod
    def TestedCumulative(cls, obj):
        return {
            "positive": math.floor(
                obj["daily"][-1]["confirmedCumulative"] / obj["daily"][-1]["testedCumulative"] * 100),
            "negative": obj["daily"][-1]["testedCumulative"] - obj["daily"][-1]["confirmedCumulative"],
            "testedCumulative": obj["daily"][-1]["testedCumulative"],
            "confirmedCumulative": obj["daily"][-1]["confirmedCumulative"],

        }
