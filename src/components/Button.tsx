
interface Props {
    children: string;
    classNameBtn?: string;
    onClick: ()=> void;
}



const Button = ({children,classNameBtn="btn btn-warning",onClick}: Props) => {
  return (
    <button className={classNameBtn} onClick={onClick} >{children}</button>
  )
}

export default Button