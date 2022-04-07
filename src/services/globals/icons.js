import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi';
import { MdOutlineCameraswitch, MdOutlineKeyboardBackspace } from 'react-icons/md';
import { BiReset } from 'react-icons/bi';
import { ROUNDED_BUTTON_ICONS_CLASSLIST, STANDALONE_ICONS_CLASSLIST } from './classlists';
import { BsEyeglasses } from 'react-icons/bs';

//STANDALONE ICONS
export const ICON_LIGHT_ON = <HiLightBulb className={STANDALONE_ICONS_CLASSLIST} />;
export const ICON_LIGHT_OFF = (
    <HiOutlineLightBulb className={STANDALONE_ICONS_CLASSLIST} />
);
export const ICON_SWITCH_CAMERA = (
    <MdOutlineCameraswitch className={STANDALONE_ICONS_CLASSLIST} />
);
export const ICON_RETURN_BUTTON = (
    <MdOutlineKeyboardBackspace className={STANDALONE_ICONS_CLASSLIST} />
);

//ROUNDED BUTTON ICONS
export const ICON_RETRY = <BiReset className={ROUNDED_BUTTON_ICONS_CLASSLIST} />;
export const ICON_VIEW_DETAILS = (
    <BsEyeglasses className={ROUNDED_BUTTON_ICONS_CLASSLIST} />
);
