const hidden = { opacity: 0 }
const opacity = { opacity: [0, 100] }
const y = { y: [20, 0] }

export const animateTitle = {
  hidden,
  show: {
    x: [-200, 0],
    ...opacity,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
}

export const animateBlockTitle = {
  hidden,
  show: {
    ...y,
    ...opacity,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
    },
  },
}

export const animateBenefitItem = {
  hidden,
  show: {
    ...y,
    ...opacity,
    transition: {
      duration: 0.7,
      staggerChildren: 0.4,
    },
  },
}

export const animateTab = {
  hidden,
  show: {
    ...opacity,
    transition: {
      duration: 0.7,
    },
  },
}

export const animateCard = {
  hidden,
  show: {
    ...opacity,
    transition: {
      duration: 0.5,
    },
  },
}
