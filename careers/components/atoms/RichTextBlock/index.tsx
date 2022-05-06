type Props = {
    richText: string
}

export default function RichTextBlock({ richText }: Props) {
    return <div dangerouslySetInnerHTML={{ __html: richText }} />
}
