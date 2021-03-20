const Logo = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
    <path
      opacity={0.7}
      fill={color}
      d="M75.94 0h-40.6L0 50l35.34 50h36.84L35.6 50 75.94 0zM164.66 0h-40.6l40.34 50-37.33 50h37.59L200 50 164.66 0z"
    />
    <path
      opacity={0.9}
      fill={color}
      d="M100 62.5L124.06 0h40.6L120.5 100h-40L35.34 0h40.6L100 62.5"
    />
  </svg>
)

export default Logo
