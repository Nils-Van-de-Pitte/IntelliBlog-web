interface TitleProps {
  title: string
  subTitle?: string
}

export function Header({ title, subTitle }: TitleProps) {
  return (
    <header className="ml-10">
      <h1 className="font-medium">{title}</h1>
      <h2 className="text-neutral-400">{subTitle}</h2>
    </header>
  )
}