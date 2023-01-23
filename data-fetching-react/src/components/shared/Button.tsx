interface Props {
  name: string;
}

export const Button = (props: Props) => {
  return <button className="our-button">{props.name}</button>;
};
