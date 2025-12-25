// export default function Ball({ballnum}) {
    
//     const ballColor = {
//         'b0': 'bg-orange-600',
//         'b1': 'bg-lime-600',
//         'b2': 'bg-sky-600',
//         'b3': 'bg-violet-600',
//         'b4': 'bg-rose-600'
//     }

//     const ballColorKey = `${ballColor["b"+Math.floor(ballnum / 10)]}`;

//     return (
//         <div className={`inline-flex w-16 h-16 mx-2 justify-center items-center
//                         rounded-full text-2xl font-bold
//                         ${ballColorKey}
//                         text-white`}>
//             {ballnum}
//         </div>
//     )
// }


export default function Ball( {ballnum} ) {

    const ballColor = {
        0: 'bg-orange-600',
        1: 'bg-lime-600',
        2: 'bg-sky-600',
        3: 'bg-violet-600',
        4: 'bg-rose-600'
    };

    const ballColorKey = Math.floor(ballnum / 10);
    const ballColorClass = ballColor[ballColorKey] ?? 'bg-gray-400';

    // 스타일
    const baseClass = `inline-flex w-16 h-16 mx-2 
        justify-center items-center 
        rounded-full 
        text-2xl 
        font-bold
        text-white
    `;

        return (
        <div className={`${baseClass} ${ballColorClass}`}>
            {ballnum}
        </div>
    );
}
