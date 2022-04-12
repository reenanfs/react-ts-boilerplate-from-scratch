const Button = (): JSX.Element => {
  return (
    <>
      <button
        onClick={(): void => {
          alert('I was clicked!!');
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default Button;
