// import TailButton from "../UI/TailButton"
// import Ball from "./Ball";
// import { useState } from "react";

// export default function Lotto() {
//     const [tags, setTags] = useState();
//     const handleOK = () => {
//         let arr = [];

//         while(arr.length < 7) {
//             let number = Math.floor(Math.random() * 45) + 1
            
//             if(!arr.includes(number)) arr.push(number);
//         }
        
//         let bonusNum = arr.splice(-1);
//         arr.sort((a, b) => (a-b));
//         console.log(arr, bonusNum)

//         let tmp = arr.concat(bonusNum);
//         tmp = tmp.map(item => <Ball ballnum={item} key={`b${item}`}/>);

//         tmp.splice(6, 0,<span className="text-3xl mx-2" key="sp">+</span>);
//         setTags(tmp);
//     }

//     return (
//         <div className="w-full flex flex-col justify-center items-center">
//             <div className="m-10">
//                 {/* ball */}
//                 {tags}
//             </div>
//             <div>
//                 {/* button */}
//                 <TailButton caption='Lotto number 생성' bcolor = 'orange' handleClick={handleOK}/>
//             </div>
//         </div>
//     )
// }

import { useState } from "react";
import TailButton from "../UI/TailButton"
import Ball from "./Ball"

function generateLottoNumbers() {
    const set = new Set();
    while(set.size < 7) {
        set.add(Math.floor(Math.random() * 45) + 1);
    }

    const nums = Array.from(set);   // 총 7개의 공
    const bonusNum = nums.pop();    // 마지막 1개 보너스 번호
    nums.sort((a, b) => a - b);     // 일반 6개 정렬

    return {nums, bonusNum};
}

export default function Lotto() {
    
    const[nums, setNums] = useState([]);
    const[bonusNum, setBonus] = useState(null);

    const handleOK = () => {
        const {nums, bonusNum} = generateLottoNumbers();
        setNums(nums);
        setBonus(bonusNum);
    };

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="m-10 flex items-center">
                {/* balls */}
                {nums.map(n => <Ball key={n} ballnum={n} />)}

                {bonusNum !== null && (
                    <>
                        <span className="text-3xl mx-2">+</span>
                        <Ball key={`bonusNum-${bonusNum}`} ballnum={bonusNum} />
                    </>
                )}
            </div>
            <div>
                <TailButton caption='Lotto number 생성' buttonColor = 'orange' handleClick={handleOK}/>
            </div>
        </div>
    )
}