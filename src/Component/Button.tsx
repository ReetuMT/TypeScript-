type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>
      Click Me
    </button>
  );
};
