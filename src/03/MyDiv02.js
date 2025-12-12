import MyDiv03 from "./MyDiv03"

// export default function MyDiv02(props) {
export default function MyDiv02({dn01, dn02, dn03}) {
  return (
    <div className="flex flex-col p-5 m-10 justify-center items-center w-3/4 h-3/4 bg-lime-700 text-white">
        <div className="w-full flex justify-start">
            {/* {`${props.dn01} > ${props.dn02}`} */}
            {`${dn01} > ${dn02}`}
        </div>
        {/* <MyDiv03 d301={props.dn01} d302={props.dn02} d303={props.dn03}/> */}
        <MyDiv03 d301={dn01} d302={dn02} d303={dn03}/>
    </div>
  )
}