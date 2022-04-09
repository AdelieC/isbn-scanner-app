//imports icons
import { HiLightBulb, HiOutlineCode, HiOutlineLightBulb } from 'react-icons/hi';
import {
    MdHome,
    MdInfo,
    MdOutlineCameraswitch,
    MdOutlineKeyboardBackspace,
} from 'react-icons/md';
import { BiBarcodeReader, BiReset, BiSearchAlt2 } from 'react-icons/bi';
import { BsEyeglasses, BsInputCursorText } from 'react-icons/bs';
import { GoLightBulb } from 'react-icons/go';
import { CgMenuRight, CgMenuRightAlt } from 'react-icons/cg';

//imports classLists
import {
    CLASSLIST_ICONS_IN_TEXT,
    CLASSLIST_ICONS_MODALS,
    STANDALONE_ICONS_CLASSLIST,
} from './classlists';
import { IoHeartHalf, IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { GiIsland } from 'react-icons/gi';
import {
    FaCreativeCommons,
    FaCreativeCommonsBy,
    FaCreativeCommonsNc,
} from 'react-icons/fa';

/*************************
    STANDALONE ICONS
 *************************/
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
export const ICON_MENU_OPEN = <CgMenuRight className={STANDALONE_ICONS_CLASSLIST} />;
export const ICON_MENU_CLOSE = <CgMenuRightAlt className={STANDALONE_ICONS_CLASSLIST} />;
export const ICON_HOME = <MdHome className={STANDALONE_ICONS_CLASSLIST} />;
export const ICON_INPUT = <BsInputCursorText className={STANDALONE_ICONS_CLASSLIST} />;
export const ICON_SCANNER = <BiBarcodeReader className={STANDALONE_ICONS_CLASSLIST} />;
export const ICON_SEARCH = <BiSearchAlt2 className={STANDALONE_ICONS_CLASSLIST} />;
export const ICON_INFO = <MdInfo className={STANDALONE_ICONS_CLASSLIST} />;

/*************************
    ICONS MIXED IN TEXT
 *************************/
export const ICON_RETRY = <BiReset className={CLASSLIST_ICONS_IN_TEXT} />;
export const ICON_VIEW_DETAILS = <BsEyeglasses className={CLASSLIST_ICONS_IN_TEXT} />;
export const ICON_SEARCH_BUTTON = <BiSearchAlt2 className={CLASSLIST_ICONS_IN_TEXT} />;
export const ICON_HEART_HALF = <IoHeartHalf className={CLASSLIST_ICONS_IN_TEXT} />;
export const ICON_HEART_FULL = <IoHeartSharp className={CLASSLIST_ICONS_IN_TEXT} />;
export const ICON_HEART_EMPTY = <IoHeartOutline className={CLASSLIST_ICONS_IN_TEXT} />;
export const ICON_HOME_BUTTON = <MdHome className={CLASSLIST_ICONS_IN_TEXT} />;
export const ICON_LICENCE_COMMONS = (
    <FaCreativeCommons className={CLASSLIST_ICONS_IN_TEXT} />
);
export const ICON_LICENCE_BY = (
    <FaCreativeCommonsBy className={CLASSLIST_ICONS_IN_TEXT} />
);
export const ICON_LICENCE_NC = (
    <FaCreativeCommonsNc className={CLASSLIST_ICONS_IN_TEXT} />
);

/*************************
			MODAL ICONS
 *************************/
export const ICON_INFORMATIVE_MESSAGE = (
    <GoLightBulb className={CLASSLIST_ICONS_MODALS} />
);
export const ICON_WORK_IN_PROGRESS = <HiOutlineCode className={CLASSLIST_ICONS_MODALS} />;

export const ICON_CARD_BARCODE = <BiBarcodeReader className={CLASSLIST_ICONS_MODALS} />;
export const ICON_CARD_INPUT = <BsInputCursorText className={CLASSLIST_ICONS_MODALS} />;
export const ICON_CARD_SEARCH = <BiSearchAlt2 className={CLASSLIST_ICONS_MODALS} />;
export const ICON_LOST = <GiIsland className={CLASSLIST_ICONS_MODALS} />;
