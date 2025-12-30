// import styles from './MyClockTime.module.css';
// import { useState, useEffect } from 'react';

// function MyClockTime () {

//     const [now, setCtime] = useState(new Date());

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCtime(new Date());
//         }, 1000);

//         return () => {
//             clearInterval(intervalId);
//         }
//     }, []);

//     return(
//         <div className={styles.c3}>
//             현재 시각 : {now.toLocaleTimeString()}            
//         </div>    
//     );
// }

// export default MyClockTime ;

import styles from './MyClockTime.module.css';
import { useState, useEffect, useMemo } from 'react';

function MyClockTime () {

    const [now, setNow] = useState(() => new Date());

    const timeFormatter = useMemo(() =>
        new Intl.DateTimeFormat("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }), []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => window.clearInterval(intervalId);
    }, []);

    return(
        <div className={styles.c3}>
            현재 시각 : {timeFormatter.format(now)}            
        </div>    
    );
}

export default MyClockTime ;