export interface ICheckoutOptions {
  /** example "Click to pay" */
  pay_button_text?: string,
  /** example "blue" */
  pay_button_color?: string,
  /** the checkout ID */
  id: string,
  close_on_complete?: true,
  /** Default is "collection". Optional. */
  page_type: "collection" | "card_issuing" | "card_token" | "cardtocard_transfer" | "beneficiary_token" | "idv"
  style?:ICheckoutStyles
}


export interface ICheckoutStyles {
  global?: GlovalCheckooutStyles.GlobalStyles;
  submit?: {
    base?: {
      backgroundColor?: string;
      fontFamily?: string;
    }
  }

}

declare namespace GlovalCheckooutStyles {
  export interface GlobalStyles {
    fonts?: any[];
    fontSizes?: FontSizes;
    input?: Input;
    cardFields?: CardFields;
    requiredFields?: RequiredFields;
    orderDetails?: OrderDetails;
    pciMessage?: PCIMessage;
    dropdown?: Dropdown;
    submit?: Submit;
    clear?: Clear;
    tooltip?: Tooltip;
    cart?: Cart;
  }

  export interface CardFields {
    title?: PCIMessage;
    saveForFutureLabel?: PCIMessage;
  }

  export interface PCIMessage {
    color?: string;
  }

  export interface Cart {
    background?: string;
    border?: string;
    fontFamily?: string;
    description?: Amount;
    amount?: Amount;
    quantityTitle?: QuantityTitle;
    quantityValue?: Amount;
    image?: Image;
  }

  export interface Amount {
    fontSize?: string;
    fontWeight?: number;
    color?: string;
    fontFamily?: string;
  }

  export interface Image {
    width?: string;
    height?: string;
    border?: string;
    borderRadius?: number;
    hover?: ImageHover;
    focus?: Focus;
  }

  export interface Focus {
    outline?: string;
  }

  export interface ImageHover {
    border?: string;
    borderRadius?: number;
    transition?: string;
  }

  export interface QuantityTitle {
    fontSize?: string;
    color?: string;
  }

  export interface Clear {
    base?: ClearBase;
    hover?: ClearHover;
    active?: ClearActive;
  }

  export interface ClearActive {
    backgroundColor?: string;
  }

  export interface ClearBase {
    width?: string;
    height?: string;
    padding?: string;
    borderRadius?: string;
    backgroundColor?: string;
    cursor?: string;
  }

  export interface ClearHover {
    backgroundColor?: string;
    transition?: string;
  }

  export interface Dropdown {
    backgroundColor?: string;
    title?: PCIMessage;
    base?: DropdownBase;
    active?: ErrorClass;
    error?: ErrorClass;
    focus?: Focus;
    placeholder?: Amount;
    disabled?: Disabled;
    item?: Item;
    list?: List;
  }

  export interface ErrorClass {
    borderColor?: string;
    backgroundColor?: string;
    color?: string;
    labelColor?: string;
  }

  export interface DropdownBase {
    fontSize?: string;
    fontWeight?: number;
    color?: string;
    borderColor?: string;
    backgroundColor?: string;
    borderRadius?: string;
    fontFamily?: string;
  }

  export interface Disabled {
    color?: string;
    backgroundColor?: string;
  }

  export interface Item {
    transition?: string;
    base?: ItemBase;
    active?: Disabled;
    hover?: Disabled;
    selected?: Disabled;
  }

  export interface ItemBase {
    backgroundColor?: string;
    color?: string;
    fontFamily?: string;
  }

  export interface List {
    backgroundColor?: string;
    borderRadius?: string;
    boxShadow?: string;
    border?: string;
    transition?: string;
    padding?: string;
  }

  export interface FontSizes {
    extraSmall?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
  }

  export interface Input {
    base?: DropdownBase;
    active?: ErrorClass;
    error?: ErrorClass;
    focus?: Focus;
    placeholder?: Amount;
    selection?: Disabled;
    disabled?: Disabled;
  }

  export interface OrderDetails {
    title?: PCIMessage;
    totalLabel?: PCIMessage;
    totalValue?: PCIMessage;
  }

  export interface RequiredFields {
    title?: PCIMessage;
  }

  export interface Submit {
    base?: SubmitBase;
    hover?: SubmitHover;
    active?: Disabled;
  }

  export interface SubmitBase {
    backgroundColor?: string;
    color?: string;
    fontWeight?: string;
    fontSize?: string;
    borderRadius?: string;
    fontFamily?: string;
    border?: string;
    boxShadow?: string;
    width?: string;
    height?: string;
    padding?: string;
    cursor?: string;
  }

  export interface SubmitHover {
    backgroundColor?: string;
    color?: string;
    fontWeight?: string;
    borderRadius?: string;
    border?: string;
    boxShadow?: string;
    transition?: string;
  }

  export interface Tooltip {
    button?: Button;
    content?: Content;
  }

  export interface Button {
    base?: ButtonBase;
    hover?: List;
    active?: List;
  }

  export interface ButtonBase {
    width?: string;
    height?: string;
    border?: string;
    borderRadius?: string;
    backgroundColor?: string;
  }

  export interface Content {
    base?: List;
    hover?: List;
  }

}
