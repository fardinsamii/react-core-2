export default function MyButton({ count, onClick }) {
   
  return (
    <button onClick={onClick}>
        Clicked Count {count}
    </button>
  )
}
