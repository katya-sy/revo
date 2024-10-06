interface CharacteristicIconsProps {
  iconName: string
}

export const CharacteristicIcons = ({ iconName }: CharacteristicIconsProps) => {
  switch (iconName) {
    case 'grains':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M15.9947 24.9842C13.7456 21.1554 13.7403 17.175 13.9689 15.3229C8.6998 17.8303 5.54683 23.2134 7.66831 28.0386C10.1673 28.2877 13.6712 27.5296 15.9947 24.9842Z"
            fill="#415167"
          />
          <path
            d="M16.5742 25.9104C14.5219 28.0875 10.9967 29.3168 8.30634 29.1543C10.7628 32.7015 17.2973 34.2612 23.1832 30.8386C20.663 30.2266 18.2863 28.4395 16.5742 25.9104Z"
            fill="#415167"
          />
          <path
            d="M22.7313 17.9603C19.2114 14.0611 18.919 10.3406 19.4029 7.89819C15.766 9.98319 13.9902 15.3284 15.4151 20.7764C17.0049 27.0043 22.6568 31.7159 27.9579 29.3438C28.1227 27.5946 27.9047 23.6683 22.7313 17.9603Z"
            fill="#415167"
          />
          <path
            d="M32.5251 16.1894C30.9088 9.98314 25.512 5.69401 20.5992 7.35117C19.8814 9.68528 19.9824 13.4383 23.5341 17.2617C25.1452 19.1571 29.1276 23.6466 29.0531 28.7318C32.3178 26.4356 33.8437 21.3667 32.5251 16.1894Z"
            fill="#415167"
          />
        </svg>
      )
    case 'mountains':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M19.0193 7.39404C18.8589 7.11733 18.5115 6.98246 18.2456 6.95483C17.9273 6.96003 17.6374 7.13811 17.4864 7.4209L14.375 13.2455L16.0068 15.1161L17.5155 12.683C17.8364 12.1659 18.6838 12.1659 19.0047 12.683L20.5135 15.1161L22.2852 13.0375L19.0193 7.39404Z"
            fill="#415167"
          />
          <path
            d="M23.75 15.5962L23.2335 14.7021L21.152 17.2304C20.9802 17.4679 20.7313 17.623 20.4102 17.5927C20.1192 17.5823 19.8522 17.4262 19.6977 17.1767L18.2451 14.8305L16.7925 17.1767C16.638 17.4263 16.371 17.5823 16.08 17.5927C16.0689 17.5936 16.0577 17.5936 16.0474 17.5936C15.7675 17.5936 15.504 17.4592 15.3382 17.2304L13.4435 14.9614L5.10463 30.4857C4.95869 30.7604 4.96555 31.0933 5.12438 31.361C5.2832 31.6297 5.56996 31.7935 5.879 31.7935H15.7786C15.5262 31.0756 15.5704 30.2742 15.9485 29.5982L23.75 15.5962Z"
            fill="#415167"
          />
          <path
            d="M26.9508 16.3034C26.6387 15.7454 25.7246 15.7454 25.4124 16.3034L23.5742 19.5865L26.1816 22.4494L28.7891 19.5865L26.9508 16.3034Z"
            fill="#415167"
          />
          <path
            d="M34.8866 30.4724L29.6612 21.2075L26.8278 24.383C26.6605 24.5847 26.4133 24.7016 26.1524 24.7016C25.8915 24.7016 25.6443 24.5847 25.4769 24.383L22.6436 21.2075L17.4767 30.4725C17.3231 30.7469 17.3257 31.0828 17.4836 31.3547C17.6415 31.6265 17.9298 31.7935 18.2422 31.7935H34.121C34.4334 31.7935 34.7218 31.6265 34.8797 31.3546C35.0376 31.0827 35.0402 30.7469 34.8866 30.4724Z"
            fill="#415167"
          />
        </svg>
      )
    default:
      break
  }
}