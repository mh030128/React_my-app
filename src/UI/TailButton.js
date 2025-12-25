
export default function TailButton({caption, bcolor, handleClick}) {
    const colors = {
        blue: {
            base: 'bg-blue-600',
            hover: 'hover:bg-blue-800'
        },
        orange: {
            base: 'bg-orange-600',
            hover: 'hover:bg-orange-800'
        }
    }

    return (
    <button className = {`inline-flex px-5 py-3 rounded-md mx-2
                        justify-center items-center
                        text-white font-bold
                        ${colors[bcolor].base}
                        ${colors[bcolor].hover}`}
                        onClick={handleClick}>
      {caption}
    </button>
  )
}
