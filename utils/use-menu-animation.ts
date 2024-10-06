import { stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export const useMenuAnimation = (isOpen: boolean) => {
  const [scope, animate] = useAnimate()
  const isMobile = window.innerWidth < 768

  useEffect(() => {
    if (isMobile) {
      animate(
        '.menu',
        {
          clipPath: isOpen ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)',
        },
        {
          type: 'spring',
          bounce: 0,
          duration: 0.5,
        },
      )

      animate(
        '.overlay',
        {
          opacity: isOpen ? 1 : 0,
        },
        {
          type: 'spring',
          bounce: 0,
          duration: 0.5,
        },
      )

      animate('nav', isOpen ? { opacity: 1 } : { opacity: 0 }, {
        type: 'spring',
        duration: 0.5,
        delay: isOpen ? stagger(0.2, { startDelay: 0.2 }) : 0,
      })

      animate('.animate-button', isOpen ? { opacity: 1 } : { opacity: 0 }, {
        type: 'spring',
        duration: 0.5,
        delay: isOpen ? stagger(0.2, { startDelay: 0.2 }) : 0,
      })
    }
  }, [isOpen])

  return scope
}
