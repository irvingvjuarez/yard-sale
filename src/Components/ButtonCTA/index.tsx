export const ButtonCTA: React.FC<{content: string}> = ({content}): JSX.Element => {
  return(
    <button className="ButtonCTA">
      {content}
    </button>
  )
}