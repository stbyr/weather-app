export const Loader = ({ src, width, quality }: { src: string; width: number; quality?: number }) =>
`${src}?w=${width}&q=${quality ? quality : 75}`