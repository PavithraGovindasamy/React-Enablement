export default function TabButton({ children, onclicked, onSelected }) {
  return (
          /** button component which has feauture of button */
    <li>
      <button onClick={onclicked} className={onSelected ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
}
