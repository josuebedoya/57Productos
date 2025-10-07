const getDirection = (position: string = 'center', spaceX: number, spaceY: number) => {
  const directionMap: Record<string, string> = {
    center: '',
    top: `group-hover/tooltip:-translate-y-${spaceY}`,
    bottom: `group-hover/tooltip:translate-y-${spaceY}`,
    left: `group-hover/tooltip:-translate-x-${spaceX}`,
    right: `group-hover/tooltip:translate-x-${spaceX}`,
    'corner-1': `group-hover/tooltip:-translate-y-${spaceY} group-hover/tooltip:-translate-x-${spaceX}`,
    'corner-2': `group-hover/tooltip:-translate-y-${spaceY} group-hover/tooltip:translate-x-${spaceX}`,
    'corner-3': `group-hover/tooltip:translate-y-${spaceY} group-hover/tooltip:translate-x-${spaceX}`,
    'corner-4': `group-hover/tooltip:translate-y-${spaceY} group-hover/tooltip:-translate-x-${spaceX}`,
  };

  return directionMap[position] ?? directionMap['center'];
}

export default getDirection;