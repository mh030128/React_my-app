// export default function MyDiv03(props) {
export default function MyDiv03({d301, d302, d303}) {
  return (
    <div className="flex flex-col p-5 m-10 w-3/4 h-3/4 bg-lime-500 text-white">
        {/* {`${props.d301} > ${props.d302} > ${props.d303}`} */}
        {`${d301} > ${d302} > ${d303}`}
    </div>
  )
}