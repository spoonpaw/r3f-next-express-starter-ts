import { useRef, forwardRef, useImperativeHandle } from 'react'

type LayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(({ children, ...props }, ref) => {
  const localRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => localRef.current)

  return (
    <div
      {...props}
      ref={localRef}
      className='absolute top-0 left-0 z-10 h-screen w-screen overflow-hidden bg-zinc-900 text-gray-50'>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
