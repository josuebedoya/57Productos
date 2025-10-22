import type {ComponentModalProps} from "@/components/modal/types.d.ts";

const defaultPropsModal = {
  position: 'left',
  size: 'sm',
  headerClassName = 'bg-white',
  headerSticky = true,
  footerSticky = true,
  footerClassName = 'bg-white',
  withFooter = false,
  withHeader = true,
} as ComponentModalProps;

export default defaultPropsModal;