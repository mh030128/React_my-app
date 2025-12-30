
export default function TailButton({caption, buttonColor, handleClick}) {
    const buttonColors = {
        blue: {
            base: 'bg-blue-600',
            hover: 'hover:bg-blue-800'
        },
        orange: {
            base: 'bg-orange-600',
            hover: 'hover:bg-orange-800'
        }
    }

    const baseClass = `inline-flex px-5 py-3 rounded-md mx-2
        justify-center items-center
        text-white font-bold`;

    const buttonClass = `
        ${baseClass}
        ${buttonColors[buttonColor].base}
        ${buttonColors[buttonColor].hover}
    `;

    return (
        <button className={buttonClass} onClick={handleClick}>
            {caption}
        </button>
    );
}
