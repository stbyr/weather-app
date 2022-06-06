type Breakpoints = {
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  }
  
  const breakpoints = [
    { bp: 480, name: 'sm' },
    { bp: 768, name: 'md' },
    { bp: 1024, name: 'lg' },
    { bp: 1200, name: 'xl' },
    { bp: 1500, name: 'xxl' },
  ]
  
  const mq = breakpoints.reduce((object, key) => {
    return { ...object, [key.name]: `@media (min-width: ${key.bp / 16}em)` }
  }, {} as Breakpoints)
  
  export default mq
  
  export const pureQueries = breakpoints.reduce((object, key) => {
    return { ...object, [key.name]: `(min-width: ${key.bp / 16}em)` }
  }, {} as Breakpoints)
  