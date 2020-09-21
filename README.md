# Covid-19 Japan Dashboard
![Image](https://github.com/kaitexio/covid-19-dashboard/blob/master/images/sample.png)
## Getting Started

All service container run with :
                
```dockerfile
docker-compose up -d --build
```


You can then stop all containers with:
```dockerfile
docker-compose down (--volume)
```

## データーソース
COVID19 感染者データ
以下の二次データを利用しています。

• [Coronavirus Disease (COVID-19) Japan Tracker](https://covid19japan.com/) \
　　• [reustle/covid19japan-data - GitHub](https://github.com/reustle/covid19japan-data/)\
　　  ・ [Full merged list of patient data for all of Japan.](https://data.covid19japan.com/patient_data/latest.json)　\
　　  ・ [Daily summary and Per-prefecture summary.](https://data.covid19japan.com/summary/latest.json)\
　　  ・ [Tokyo per-ward/city summary.](https://data.covid19japan.com/tokyo/counts.json)

