import './SidebarOption.css';

function SidebarOption({title,Icon}) {
   
  return (
    <div className="sidebarOption">
      {Icon && <Icon/>}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}
export default SidebarOption