import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('ja');
dayjs.extend(relativeTime)


const DateTime  = ({datetime,format}) => {
    const referenceDate = dayjs(datetime);
    let  result = ''
    result = referenceDate.format(format)
    return (
        <div>{result}</div>
    );
}

DateTime.defaultProps = {
    format: 'YYYY/MM/DD HH:mm',
};

export default DateTime
