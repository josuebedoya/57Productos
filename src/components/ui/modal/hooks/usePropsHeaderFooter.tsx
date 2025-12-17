import type {ComponentModalProps, PropsSlotFooter, PropsSlotHeader} from "@ui/modal/types.js";

const usePropsHeaderFooter = (props: ComponentModalProps) => {
  const headerProps: PropsSlotHeader = {
    headerClassName: props.headerClassName ?? '',
    headerSticky: props.headerSticky ?? false,
    withHeader: props.withHeader ?? false,
    titleHeader: props.titleHeader ?? '',
    subtitleHeader: props.subtitleHeader ?? '',
    labelCloseButtonHeader: props.labelCloseButtonHeader ?? '',
    onClickCloseButtonHeader: props.onClickCloseButtonHeader ?? (() => false),
    propsCloseButtonHeader: props.propsCloseButtonHeader ?? {},
    childrenHeader: props.childrenHeader ?? '',
    closeButtonHeaderPosition: props.closeButtonHeaderPosition ?? 'right'
  };

  const footerProps: PropsSlotFooter = {
    withFooter: props.withFooter ?? false,
    footerClassName: props.footerClassName ?? '',
    footerSticky: props.footerSticky ?? false,
    childrenFooter: props.childrenFooter ?? '',
    subtitleFooter: props.subtitleFooter ?? '',
    titleFooter: props.titleFooter ?? '',
    onClickActionButtonFooter: props.onClickActionButtonFooter ?? (() => false),
    actionButtonFooter: props.actionButtonFooter ?? false,
    labelActionButtonFooter: props.labelActionButtonFooter ?? '',
    propsActionButtonFooter: props.propsActionButtonFooter ?? {},
    propsCloseButtonFooter: props.propsCloseButtonFooter ?? {},
    labelCloseButtonFooter: props.labelCloseButtonFooter ?? '',
    onClickCloseButtonFooter: props.onClickCloseButtonFooter ?? (() => false)
  };

  return {headerProps, footerProps};
};

export default usePropsHeaderFooter;