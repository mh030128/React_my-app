import MyDiv02 from "./MyDiv02"

export default function MyDiv01() {
  const d01 = 'div01';
  const d02 = 'div02';
  const d03 = 'div03';

  return (
    <div className="flex flex-col p-5 justify-center items-center w-2/3 h-2/3 text-2xl bg-lime-900 text-white">
        <div className="w-full h-10 flex justify-start items-center">
            {d01}
        </div>
        <MyDiv02 dn01={d01} dn02={d02} dn03={d03} />
        {/* div02에서는 div01, div02만 사용하지만 div03에 전달해야 하기 때문에
        사용하지 않더라도 div03에 대한 값을 넣어야 함. */}
    </div>
  )
}