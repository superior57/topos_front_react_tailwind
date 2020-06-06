import mock from './../mock';
// import _ from '@lodash';

const iconsDB = [
    {
        "order"    : 1732,
        "id"       : 1012,
        "name"     : "3d_rotation",
        "prevSize" : 32,
        "code"     : 59648,
        "ligatures": "3d_rotation",
        "tags"     : ["d_rotation"]
    }, {
        "order"    : 1733,
        "id"       : 1011,
        "name"     : "4k",
        "prevSize" : 32,
        "code"     : 59649,
        "ligatures": "4k",
        "tags"     : ["k"]
    }, {
        "order"    : 1734,
        "id"       : 1010,
        "name"     : "360",
        "prevSize" : 32,
        "code"     : 59650,
        "ligatures": "360",
        "tags"     : ["360"]
    }, {
        "order"    : 1735,
        "id"       : 1009,
        "name"     : "ac_unit",
        "prevSize" : 32,
        "code"     : 59651,
        "ligatures": "ac_unit",
        "tags"     : ["ac_unit"]
    }, {
        "order"    : 1736,
        "id"       : 1008,
        "name"     : "access_alarm",
        "prevSize" : 32,
        "code"     : 59652,
        "ligatures": "access_alarm",
        "tags"     : ["access_alarm"]
    }, {
        "order"    : 1737,
        "id"       : 1007,
        "name"     : "access_alarms",
        "prevSize" : 32,
        "code"     : 59653,
        "ligatures": "access_alarms",
        "tags"     : ["access_alarms"]
    }, {
        "order"    : 1738,
        "id"       : 1006,
        "name"     : "access_time",
        "prevSize" : 32,
        "code"     : 59654,
        "ligatures": "access_time",
        "tags"     : ["access_time"]
    }, {
        "order"    : 1739,
        "id"       : 1005,
        "name"     : "accessibility_new",
        "prevSize" : 32,
        "code"     : 59655,
        "ligatures": "accessibility_new",
        "tags"     : ["accessibility_new"]
    }, {
        "order"    : 1740,
        "id"       : 1004,
        "name"     : "accessibility",
        "prevSize" : 32,
        "code"     : 59656,
        "ligatures": "accessibility",
        "tags"     : ["accessibility"]
    }, {
        "order"    : 1741,
        "id"       : 1003,
        "name"     : "accessible_forward",
        "prevSize" : 32,
        "code"     : 59657,
        "ligatures": "accessible_forward",
        "tags"     : ["accessible_forward"]
    }, {
        "order"    : 1742,
        "id"       : 1002,
        "name"     : "accessible",
        "prevSize" : 32,
        "code"     : 59658,
        "ligatures": "accessible",
        "tags"     : ["accessible"]
    }, {
        "order"    : 1743,
        "id"       : 1001,
        "name"     : "account_balance_wallet",
        "prevSize" : 32,
        "code"     : 59659,
        "ligatures": "account_balance_wallet",
        "tags"     : ["account_balance_wallet"]
    }, {
        "order"    : 1744,
        "id"       : 1000,
        "name"     : "account_balance",
        "prevSize" : 32,
        "code"     : 59660,
        "ligatures": "account_balance",
        "tags"     : ["account_balance"]
    }, {
        "order"    : 1745,
        "id"       : 999,
        "name"     : "account_box",
        "prevSize" : 32,
        "code"     : 59661,
        "ligatures": "account_box",
        "tags"     : ["account_box"]
    }, {
        "order"    : 1746,
        "id"       : 998,
        "name"     : "account_circle",
        "prevSize" : 32,
        "code"     : 59662,
        "ligatures": "account_circle",
        "tags"     : ["account_circle"]
    }, {
        "order"    : 1747,
        "id"       : 997,
        "name"     : "adb",
        "prevSize" : 32,
        "code"     : 59663,
        "ligatures": "adb",
        "tags"     : ["adb"]
    }, {
        "order"    : 1748,
        "id"       : 996,
        "name"     : "add_a_photo",
        "prevSize" : 32,
        "code"     : 59664,
        "ligatures": "add_a_photo",
        "tags"     : ["add_a_photo"]
    }, {
        "order"    : 1749,
        "id"       : 995,
        "name"     : "add_alarm",
        "prevSize" : 32,
        "code"     : 59665,
        "ligatures": "add_alarm",
        "tags"     : ["add_alarm"]
    }, {
        "order"    : 1750,
        "id"       : 994,
        "name"     : "add_alert",
        "prevSize" : 32,
        "code"     : 59666,
        "ligatures": "add_alert",
        "tags"     : ["add_alert"]
    }, {
        "order"    : 1751,
        "id"       : 993,
        "name"     : "add_box",
        "prevSize" : 32,
        "code"     : 59667,
        "ligatures": "add_box",
        "tags"     : ["add_box"]
    }, {
        "order"    : 1752,
        "id"       : 992,
        "name"     : "add_circle_outline",
        "prevSize" : 32,
        "code"     : 59668,
        "ligatures": "add_circle_outline",
        "tags"     : ["add_circle_outline"]
    }, {
        "order"    : 1753,
        "id"       : 991,
        "name"     : "add_circle",
        "prevSize" : 32,
        "code"     : 59669,
        "ligatures": "add_circle",
        "tags"     : ["add_circle"]
    }, {
        "order"    : 1754,
        "id"       : 990,
        "name"     : "add_comment",
        "prevSize" : 32,
        "code"     : 59670,
        "ligatures": "add_comment",
        "tags"     : ["add_comment"]
    }, {
        "order"    : 1755,
        "id"       : 989,
        "name"     : "add_location",
        "prevSize" : 32,
        "code"     : 59671,
        "ligatures": "add_location",
        "tags"     : ["add_location"]
    }, {
        "order"    : 1756,
        "id"       : 988,
        "name"     : "add_photo_alternate",
        "prevSize" : 32,
        "code"     : 59672,
        "ligatures": "add_photo_alternate",
        "tags"     : ["add_photo_alternate"]
    }, {
        "order"    : 1757,
        "id"       : 987,
        "name"     : "add_shopping_cart",
        "prevSize" : 32,
        "code"     : 59673,
        "ligatures": "add_shopping_cart",
        "tags"     : ["add_shopping_cart"]
    }, {
        "order"    : 1758,
        "id"       : 986,
        "name"     : "add_to_home_screen",
        "prevSize" : 32,
        "code"     : 59674,
        "ligatures": "add_to_home_screen",
        "tags"     : ["add_to_home_screen"]
    }, {
        "order"    : 1759,
        "id"       : 985,
        "name"     : "add_to_photos",
        "prevSize" : 32,
        "code"     : 59675,
        "ligatures": "add_to_photos",
        "tags"     : ["add_to_photos"]
    }, {
        "order"    : 1760,
        "id"       : 984,
        "name"     : "add_to_queue",
        "prevSize" : 32,
        "code"     : 59676,
        "ligatures": "add_to_queue",
        "tags"     : ["add_to_queue"]
    }, {
        "order"    : 1761,
        "id"       : 983,
        "name"     : "add",
        "prevSize" : 32,
        "code"     : 59677,
        "ligatures": "add",
        "tags"     : ["add"]
    }, {
        "order"    : 1762,
        "id"       : 982,
        "name"     : "adjust",
        "prevSize" : 32,
        "code"     : 59678,
        "ligatures": "adjust",
        "tags"     : ["adjust"]
    }, {
        "order"    : 1763,
        "id"       : 981,
        "name"     : "airline_seat_flat_angled",
        "prevSize" : 32,
        "code"     : 59679,
        "ligatures": "airline_seat_flat_angled",
        "tags"     : ["airline_seat_flat_angled"]
    }, {
        "order"    : 1764,
        "id"       : 980,
        "name"     : "airline_seat_flat",
        "prevSize" : 32,
        "code"     : 59680,
        "ligatures": "airline_seat_flat",
        "tags"     : ["airline_seat_flat"]
    }, {
        "order"    : 1765,
        "id"       : 979,
        "name"     : "airline_seat_individual_suite",
        "prevSize" : 32,
        "code"     : 59681,
        "ligatures": "airline_seat_individual_suite",
        "tags"     : ["airline_seat_individual_suite"]
    }, {
        "order"    : 1766,
        "id"       : 978,
        "name"     : "airline_seat_legroom_extra",
        "prevSize" : 32,
        "code"     : 59682,
        "ligatures": "airline_seat_legroom_extra",
        "tags"     : ["airline_seat_legroom_extra"]
    }, {
        "order"    : 1767,
        "id"       : 977,
        "name"     : "airline_seat_legroom_normal",
        "prevSize" : 32,
        "code"     : 59683,
        "ligatures": "airline_seat_legroom_normal",
        "tags"     : ["airline_seat_legroom_normal"]
    }, {
        "order"    : 1768,
        "id"       : 976,
        "name"     : "airline_seat_legroom_reduced",
        "prevSize" : 32,
        "code"     : 59684,
        "ligatures": "airline_seat_legroom_reduced",
        "tags"     : ["airline_seat_legroom_reduced"]
    }, {
        "order"    : 1769,
        "id"       : 975,
        "name"     : "airline_seat_recline_extra",
        "prevSize" : 32,
        "code"     : 59685,
        "ligatures": "airline_seat_recline_extra",
        "tags"     : ["airline_seat_recline_extra"]
    }, {
        "order"    : 1770,
        "id"       : 974,
        "name"     : "airline_seat_recline_normal",
        "prevSize" : 32,
        "code"     : 59686,
        "ligatures": "airline_seat_recline_normal",
        "tags"     : ["airline_seat_recline_normal"]
    }, {
        "order"    : 1771,
        "id"       : 973,
        "name"     : "airplanemode_active",
        "prevSize" : 32,
        "code"     : 59687,
        "ligatures": "airplanemode_active",
        "tags"     : ["airplanemode_active"]
    }, {
        "order"    : 1772,
        "id"       : 972,
        "name"     : "airplanemode_inactive",
        "prevSize" : 32,
        "code"     : 59688,
        "ligatures": "airplanemode_inactive",
        "tags"     : ["airplanemode_inactive"]
    }, {
        "order"    : 1773,
        "id"       : 971,
        "name"     : "airplay",
        "prevSize" : 32,
        "code"     : 59689,
        "ligatures": "airplay",
        "tags"     : ["airplay"]
    }, {
        "order"    : 1774,
        "id"       : 970,
        "name"     : "airport_shuttle",
        "prevSize" : 32,
        "code"     : 59690,
        "ligatures": "airport_shuttle",
        "tags"     : ["airport_shuttle"]
    }, {
        "order"    : 1775,
        "id"       : 969,
        "name"     : "alarm_add",
        "prevSize" : 32,
        "code"     : 59691,
        "ligatures": "alarm_add",
        "tags"     : ["alarm_add"]
    }, {
        "order"    : 1776,
        "id"       : 968,
        "name"     : "alarm_off",
        "prevSize" : 32,
        "code"     : 59692,
        "ligatures": "alarm_off",
        "tags"     : ["alarm_off"]
    }, {
        "order"    : 1777,
        "id"       : 967,
        "name"     : "alarm_on",
        "prevSize" : 32,
        "code"     : 59693,
        "ligatures": "alarm_on",
        "tags"     : ["alarm_on"]
    }, {
        "order"    : 1778,
        "id"       : 966,
        "name"     : "alarm",
        "prevSize" : 32,
        "code"     : 59694,
        "ligatures": "alarm",
        "tags"     : ["alarm"]
    }, {
        "order"    : 1779,
        "id"       : 965,
        "name"     : "album",
        "prevSize" : 32,
        "code"     : 59695,
        "ligatures": "album",
        "tags"     : ["album"]
    }, {
        "order"    : 1780,
        "id"       : 964,
        "name"     : "all_inbox",
        "prevSize" : 32,
        "code"     : 59696,
        "ligatures": "all_inbox",
        "tags"     : ["all_inbox"]
    }, {
        "order"    : 1781,
        "id"       : 963,
        "name"     : "all_inclusive",
        "prevSize" : 32,
        "code"     : 59697,
        "ligatures": "all_inclusive",
        "tags"     : ["all_inclusive"]
    }, {
        "order"    : 1782,
        "id"       : 962,
        "name"     : "all_out",
        "prevSize" : 32,
        "code"     : 59698,
        "ligatures": "all_out",
        "tags"     : ["all_out"]
    }, {
        "order"    : 1783,
        "id"       : 961,
        "name"     : "alternate_email",
        "prevSize" : 32,
        "code"     : 59699,
        "ligatures": "alternate_email",
        "tags"     : ["alternate_email"]
    }, {
        "order"    : 1784,
        "id"       : 960,
        "name"     : "android",
        "prevSize" : 32,
        "code"     : 59700,
        "ligatures": "android",
        "tags"     : ["android"]
    }, {
        "order"    : 1785,
        "id"       : 959,
        "name"     : "announcement",
        "prevSize" : 32,
        "code"     : 59701,
        "ligatures": "announcement",
        "tags"     : ["announcement"]
    }, {
        "order"    : 1786,
        "id"       : 958,
        "name"     : "apps",
        "prevSize" : 32,
        "code"     : 59702,
        "ligatures": "apps",
        "tags"     : ["apps"]
    }, {
        "order"    : 1787,
        "id"       : 957,
        "name"     : "archive",
        "prevSize" : 32,
        "code"     : 59703,
        "ligatures": "archive",
        "tags"     : ["archive"]
    }, {
        "order"    : 1788,
        "id"       : 956,
        "name"     : "arrow_back_ios",
        "prevSize" : 32,
        "code"     : 59704,
        "ligatures": "arrow_back_ios",
        "tags"     : ["arrow_back_ios"]
    }, {
        "order"    : 1789,
        "id"       : 955,
        "name"     : "arrow_back",
        "prevSize" : 32,
        "code"     : 59705,
        "ligatures": "arrow_back",
        "tags"     : ["arrow_back"]
    }, {
        "order"    : 1790,
        "id"       : 954,
        "name"     : "arrow_downward",
        "prevSize" : 32,
        "code"     : 59706,
        "ligatures": "arrow_downward",
        "tags"     : ["arrow_downward"]
    }, {
        "order"    : 1791,
        "id"       : 953,
        "name"     : "arrow_drop_down_circle",
        "prevSize" : 32,
        "code"     : 59707,
        "ligatures": "arrow_drop_down_circle",
        "tags"     : ["arrow_drop_down_circle"]
    }, {
        "order"    : 1792,
        "id"       : 952,
        "name"     : "arrow_drop_down",
        "prevSize" : 32,
        "code"     : 59708,
        "ligatures": "arrow_drop_down",
        "tags"     : ["arrow_drop_down"]
    }, {
        "order"    : 1793,
        "id"       : 951,
        "name"     : "arrow_drop_up",
        "prevSize" : 32,
        "code"     : 59709,
        "ligatures": "arrow_drop_up",
        "tags"     : ["arrow_drop_up"]
    }, {
        "order"    : 1794,
        "id"       : 950,
        "name"     : "arrow_forward_ios",
        "prevSize" : 32,
        "code"     : 59710,
        "ligatures": "arrow_forward_ios",
        "tags"     : ["arrow_forward_ios"]
    }, {
        "order"    : 1795,
        "id"       : 949,
        "name"     : "arrow_forward",
        "prevSize" : 32,
        "code"     : 59711,
        "ligatures": "arrow_forward",
        "tags"     : ["arrow_forward"]
    }, {
        "order"    : 1796,
        "id"       : 948,
        "name"     : "arrow_left",
        "prevSize" : 32,
        "code"     : 59712,
        "ligatures": "arrow_left",
        "tags"     : ["arrow_left"]
    }, {
        "order"    : 1797,
        "id"       : 947,
        "name"     : "arrow_right_alt",
        "prevSize" : 32,
        "code"     : 59713,
        "ligatures": "arrow_right_alt",
        "tags"     : ["arrow_right_alt"]
    }, {
        "order"    : 1798,
        "id"       : 946,
        "name"     : "arrow_right",
        "prevSize" : 32,
        "code"     : 59714,
        "ligatures": "arrow_right",
        "tags"     : ["arrow_right"]
    }, {
        "order"    : 1799,
        "id"       : 945,
        "name"     : "arrow_upward",
        "prevSize" : 32,
        "code"     : 59715,
        "ligatures": "arrow_upward",
        "tags"     : ["arrow_upward"]
    }, {
        "order"    : 1800,
        "id"       : 944,
        "name"     : "art_track",
        "prevSize" : 32,
        "code"     : 59716,
        "ligatures": "art_track",
        "tags"     : ["art_track"]
    }, {
        "order"    : 1801,
        "id"       : 943,
        "name"     : "aspect_ratio",
        "prevSize" : 32,
        "code"     : 59717,
        "ligatures": "aspect_ratio",
        "tags"     : ["aspect_ratio"]
    }, {
        "order"    : 1802,
        "id"       : 942,
        "name"     : "assessment",
        "prevSize" : 32,
        "code"     : 59718,
        "ligatures": "assessment",
        "tags"     : ["assessment"]
    }, {
        "order"    : 1803,
        "id"       : 941,
        "name"     : "assignment_ind",
        "prevSize" : 32,
        "code"     : 59719,
        "ligatures": "assignment_ind",
        "tags"     : ["assignment_ind"]
    }, {
        "order"    : 1804,
        "id"       : 940,
        "name"     : "assignment_late",
        "prevSize" : 32,
        "code"     : 59720,
        "ligatures": "assignment_late",
        "tags"     : ["assignment_late"]
    }, {
        "order"    : 1805,
        "id"       : 939,
        "name"     : "assignment_return",
        "prevSize" : 32,
        "code"     : 59721,
        "ligatures": "assignment_return",
        "tags"     : ["assignment_return"]
    }, {
        "order"    : 1806,
        "id"       : 938,
        "name"     : "assignment_returned",
        "prevSize" : 32,
        "code"     : 59722,
        "ligatures": "assignment_returned",
        "tags"     : ["assignment_returned"]
    }, {
        "order"    : 1807,
        "id"       : 937,
        "name"     : "assignment_turned_in",
        "prevSize" : 32,
        "code"     : 59723,
        "ligatures": "assignment_turned_in",
        "tags"     : ["assignment_turned_in"]
    }, {
        "order"    : 1808,
        "id"       : 936,
        "name"     : "assignment",
        "prevSize" : 32,
        "code"     : 59724,
        "ligatures": "assignment",
        "tags"     : ["assignment"]
    }, {
        "order"    : 1809,
        "id"       : 935,
        "name"     : "assistant_photo",
        "prevSize" : 32,
        "code"     : 59725,
        "ligatures": "assistant_photo",
        "tags"     : ["assistant_photo"]
    }, {
        "order"    : 1810,
        "id"       : 934,
        "name"     : "assistant",
        "prevSize" : 32,
        "code"     : 59726,
        "ligatures": "assistant",
        "tags"     : ["assistant"]
    }, {
        "order"    : 1811,
        "id"       : 933,
        "name"     : "atm",
        "prevSize" : 32,
        "code"     : 59727,
        "ligatures": "atm",
        "tags"     : ["atm"]
    }, {
        "order"    : 1812,
        "id"       : 932,
        "name"     : "attach_file",
        "prevSize" : 32,
        "code"     : 59728,
        "ligatures": "attach_file",
        "tags"     : ["attach_file"]
    }, {
        "order"    : 1813,
        "id"       : 931,
        "name"     : "attach_money",
        "prevSize" : 32,
        "code"     : 59729,
        "ligatures": "attach_money",
        "tags"     : ["attach_money"]
    }, {
        "order"    : 1814,
        "id"       : 930,
        "name"     : "attachment",
        "prevSize" : 32,
        "code"     : 59730,
        "ligatures": "attachment",
        "tags"     : ["attachment"]
    }, {
        "order"    : 1815,
        "id"       : 929,
        "name"     : "audiotrack",
        "prevSize" : 32,
        "code"     : 59731,
        "ligatures": "audiotrack",
        "tags"     : ["audiotrack"]
    }, {
        "order"    : 1816,
        "id"       : 928,
        "name"     : "autorenew",
        "prevSize" : 32,
        "code"     : 59732,
        "ligatures": "autorenew",
        "tags"     : ["autorenew"]
    }, {
        "order"    : 1817,
        "id"       : 927,
        "name"     : "av_timer",
        "prevSize" : 32,
        "code"     : 59733,
        "ligatures": "av_timer",
        "tags"     : ["av_timer"]
    }, {
        "order"    : 1818,
        "id"       : 926,
        "name"     : "backspace",
        "prevSize" : 32,
        "code"     : 59734,
        "ligatures": "backspace",
        "tags"     : ["backspace"]
    }, {
        "order"    : 1819,
        "id"       : 925,
        "name"     : "backup",
        "prevSize" : 32,
        "code"     : 59735,
        "ligatures": "backup",
        "tags"     : ["backup"]
    }, {
        "order"    : 1820,
        "id"       : 924,
        "name"     : "ballot",
        "prevSize" : 32,
        "code"     : 59736,
        "ligatures": "ballot",
        "tags"     : ["ballot"]
    }, {
        "order"    : 1821,
        "id"       : 923,
        "name"     : "bar_chart",
        "prevSize" : 32,
        "code"     : 59737,
        "ligatures": "bar_chart",
        "tags"     : ["bar_chart"]
    }, {
        "order"    : 1822,
        "id"       : 922,
        "name"     : "battery_alert",
        "prevSize" : 32,
        "code"     : 59738,
        "ligatures": "battery_alert",
        "tags"     : ["battery_alert"]
    }, {
        "order"    : 1823,
        "id"       : 921,
        "name"     : "battery_charging_full",
        "prevSize" : 32,
        "code"     : 59739,
        "ligatures": "battery_charging_full",
        "tags"     : ["battery_charging_full"]
    }, {
        "order"    : 1824,
        "id"       : 920,
        "name"     : "battery_full",
        "prevSize" : 32,
        "code"     : 59740,
        "ligatures": "battery_full",
        "tags"     : ["battery_full"]
    }, {
        "order"    : 1825,
        "id"       : 919,
        "name"     : "battery_std",
        "prevSize" : 32,
        "code"     : 59741,
        "ligatures": "battery_std",
        "tags"     : ["battery_std"]
    }, {
        "order"    : 1826,
        "id"       : 918,
        "name"     : "battery_unknown",
        "prevSize" : 32,
        "code"     : 59742,
        "ligatures": "battery_unknown",
        "tags"     : ["battery_unknown"]
    }, {
        "order"    : 1827,
        "id"       : 917,
        "name"     : "beach_access",
        "prevSize" : 32,
        "code"     : 59743,
        "ligatures": "beach_access",
        "tags"     : ["beach_access"]
    }, {
        "order"    : 1828,
        "id"       : 916,
        "name"     : "beenhere",
        "prevSize" : 32,
        "code"     : 59744,
        "ligatures": "beenhere",
        "tags"     : ["beenhere"]
    }, {
        "order"    : 1829,
        "id"       : 915,
        "name"     : "block",
        "prevSize" : 32,
        "code"     : 59745,
        "ligatures": "block",
        "tags"     : ["block"]
    }, {
        "order"    : 1830,
        "id"       : 914,
        "name"     : "bluetooth_audio",
        "prevSize" : 32,
        "code"     : 59746,
        "ligatures": "bluetooth_audio",
        "tags"     : ["bluetooth_audio"]
    }, {
        "order"    : 1831,
        "id"       : 913,
        "name"     : "bluetooth_connected",
        "prevSize" : 32,
        "code"     : 59747,
        "ligatures": "bluetooth_connected",
        "tags"     : ["bluetooth_connected"]
    }, {
        "order"    : 1832,
        "id"       : 912,
        "name"     : "bluetooth_disabled",
        "prevSize" : 32,
        "code"     : 59748,
        "ligatures": "bluetooth_disabled",
        "tags"     : ["bluetooth_disabled"]
    }, {
        "order"    : 1833,
        "id"       : 911,
        "name"     : "bluetooth_searching",
        "prevSize" : 32,
        "code"     : 59749,
        "ligatures": "bluetooth_searching",
        "tags"     : ["bluetooth_searching"]
    }, {
        "order"    : 1834,
        "id"       : 910,
        "name"     : "bluetooth",
        "prevSize" : 32,
        "code"     : 59750,
        "ligatures": "bluetooth",
        "tags"     : ["bluetooth"]
    }, {
        "order"    : 1835,
        "id"       : 909,
        "name"     : "blur_circular",
        "prevSize" : 32,
        "code"     : 59751,
        "ligatures": "blur_circular",
        "tags"     : ["blur_circular"]
    }, {
        "order"    : 1836,
        "id"       : 908,
        "name"     : "blur_linear",
        "prevSize" : 32,
        "code"     : 59752,
        "ligatures": "blur_linear",
        "tags"     : ["blur_linear"]
    }, {
        "order"    : 1837,
        "id"       : 907,
        "name"     : "blur_off",
        "prevSize" : 32,
        "code"     : 59753,
        "ligatures": "blur_off",
        "tags"     : ["blur_off"]
    }, {
        "order"    : 1838,
        "id"       : 906,
        "name"     : "blur_on",
        "prevSize" : 32,
        "code"     : 59754,
        "ligatures": "blur_on",
        "tags"     : ["blur_on"]
    }, {
        "order"    : 1839,
        "id"       : 905,
        "name"     : "book",
        "prevSize" : 32,
        "code"     : 59755,
        "ligatures": "book",
        "tags"     : ["book"]
    }, {
        "order"    : 1840,
        "id"       : 904,
        "name"     : "bookmark_border",
        "prevSize" : 32,
        "code"     : 59756,
        "ligatures": "bookmark_border",
        "tags"     : ["bookmark_border"]
    }, {
        "order"    : 1841,
        "id"       : 903,
        "name"     : "bookmark",
        "prevSize" : 32,
        "code"     : 59757,
        "ligatures": "bookmark",
        "tags"     : ["bookmark"]
    }, {
        "order"    : 1842,
        "id"       : 902,
        "name"     : "bookmarks",
        "prevSize" : 32,
        "code"     : 59758,
        "ligatures": "bookmarks",
        "tags"     : ["bookmarks"]
    }, {
        "order"    : 1843,
        "id"       : 901,
        "name"     : "border_all",
        "prevSize" : 32,
        "code"     : 59759,
        "ligatures": "border_all",
        "tags"     : ["border_all"]
    }, {
        "order"    : 1844,
        "id"       : 900,
        "name"     : "border_bottom",
        "prevSize" : 32,
        "code"     : 59760,
        "ligatures": "border_bottom",
        "tags"     : ["border_bottom"]
    }, {
        "order"    : 1845,
        "id"       : 899,
        "name"     : "border_clear",
        "prevSize" : 32,
        "code"     : 59761,
        "ligatures": "border_clear",
        "tags"     : ["border_clear"]
    }, {
        "order"    : 1846,
        "id"       : 898,
        "name"     : "border_horizontal",
        "prevSize" : 32,
        "code"     : 59762,
        "ligatures": "border_horizontal",
        "tags"     : ["border_horizontal"]
    }, {
        "order"    : 1847,
        "id"       : 897,
        "name"     : "border_inner",
        "prevSize" : 32,
        "code"     : 59763,
        "ligatures": "border_inner",
        "tags"     : ["border_inner"]
    }, {
        "order"    : 1848,
        "id"       : 896,
        "name"     : "border_left",
        "prevSize" : 32,
        "code"     : 59764,
        "ligatures": "border_left",
        "tags"     : ["border_left"]
    }, {
        "order"    : 1849,
        "id"       : 895,
        "name"     : "border_outer",
        "prevSize" : 32,
        "code"     : 59765,
        "ligatures": "border_outer",
        "tags"     : ["border_outer"]
    }, {
        "order"    : 1850,
        "id"       : 894,
        "name"     : "border_right",
        "prevSize" : 32,
        "code"     : 59766,
        "ligatures": "border_right",
        "tags"     : ["border_right"]
    }, {
        "order"    : 1851,
        "id"       : 893,
        "name"     : "border_style",
        "prevSize" : 32,
        "code"     : 59767,
        "ligatures": "border_style",
        "tags"     : ["border_style"]
    }, {
        "order"    : 1852,
        "id"       : 892,
        "name"     : "border_top",
        "prevSize" : 32,
        "code"     : 59768,
        "ligatures": "border_top",
        "tags"     : ["border_top"]
    }, {
        "order"    : 1853,
        "id"       : 891,
        "name"     : "border_vertical",
        "prevSize" : 32,
        "code"     : 59769,
        "ligatures": "border_vertical",
        "tags"     : ["border_vertical"]
    }, {
        "order"    : 1854,
        "id"       : 890,
        "name"     : "branding_watermark",
        "prevSize" : 32,
        "code"     : 59770,
        "ligatures": "branding_watermark",
        "tags"     : ["branding_watermark"]
    }, {
        "order"    : 1855,
        "id"       : 889,
        "name"     : "brightness_1",
        "prevSize" : 32,
        "code"     : 59771,
        "ligatures": "brightness_1",
        "tags"     : ["brightness_1"]
    }, {
        "order"    : 1856,
        "id"       : 888,
        "name"     : "brightness_2",
        "prevSize" : 32,
        "code"     : 59772,
        "ligatures": "brightness_2",
        "tags"     : ["brightness_2"]
    }, {
        "order"    : 1857,
        "id"       : 887,
        "name"     : "brightness_3",
        "prevSize" : 32,
        "code"     : 59773,
        "ligatures": "brightness_3",
        "tags"     : ["brightness_3"]
    }, {
        "order"    : 1858,
        "id"       : 886,
        "name"     : "brightness_4",
        "prevSize" : 32,
        "code"     : 59774,
        "ligatures": "brightness_4",
        "tags"     : ["brightness_4"]
    }, {
        "order"    : 1859,
        "id"       : 885,
        "name"     : "brightness_5",
        "prevSize" : 32,
        "code"     : 59775,
        "ligatures": "brightness_5",
        "tags"     : ["brightness_5"]
    }, {
        "order"    : 1860,
        "id"       : 884,
        "name"     : "brightness_6",
        "prevSize" : 32,
        "code"     : 59776,
        "ligatures": "brightness_6",
        "tags"     : ["brightness_6"]
    }, {
        "order"    : 1861,
        "id"       : 883,
        "name"     : "brightness_7",
        "prevSize" : 32,
        "code"     : 59777,
        "ligatures": "brightness_7",
        "tags"     : ["brightness_7"]
    }, {
        "order"    : 1862,
        "id"       : 882,
        "name"     : "brightness_auto",
        "prevSize" : 32,
        "code"     : 59778,
        "ligatures": "brightness_auto",
        "tags"     : ["brightness_auto"]
    }, {
        "order"    : 1863,
        "id"       : 881,
        "name"     : "brightness_high",
        "prevSize" : 32,
        "code"     : 59779,
        "ligatures": "brightness_high",
        "tags"     : ["brightness_high"]
    }, {
        "order"    : 1864,
        "id"       : 880,
        "name"     : "brightness_low",
        "prevSize" : 32,
        "code"     : 59780,
        "ligatures": "brightness_low",
        "tags"     : ["brightness_low"]
    }, {
        "order"    : 1865,
        "id"       : 879,
        "name"     : "brightness_medium",
        "prevSize" : 32,
        "code"     : 59781,
        "ligatures": "brightness_medium",
        "tags"     : ["brightness_medium"]
    }, {
        "order"    : 1866,
        "id"       : 878,
        "name"     : "broken_image",
        "prevSize" : 32,
        "code"     : 59782,
        "ligatures": "broken_image",
        "tags"     : ["broken_image"]
    }, {
        "order"    : 1867,
        "id"       : 877,
        "name"     : "brush",
        "prevSize" : 32,
        "code"     : 59783,
        "ligatures": "brush",
        "tags"     : ["brush"]
    }, {
        "order"    : 1868,
        "id"       : 876,
        "name"     : "bubble_chart",
        "prevSize" : 32,
        "code"     : 59784,
        "ligatures": "bubble_chart",
        "tags"     : ["bubble_chart"]
    }, {
        "order"    : 1869,
        "id"       : 875,
        "name"     : "bug_report",
        "prevSize" : 32,
        "code"     : 59785,
        "ligatures": "bug_report",
        "tags"     : ["bug_report"]
    }, {
        "order"    : 1870,
        "id"       : 874,
        "name"     : "build",
        "prevSize" : 32,
        "code"     : 59786,
        "ligatures": "build",
        "tags"     : ["build"]
    }, {
        "order"    : 1871,
        "id"       : 873,
        "name"     : "burst_mode",
        "prevSize" : 32,
        "code"     : 59787,
        "ligatures": "burst_mode",
        "tags"     : ["burst_mode"]
    }, {
        "order"    : 1872,
        "id"       : 872,
        "name"     : "business_center",
        "prevSize" : 32,
        "code"     : 59788,
        "ligatures": "business_center",
        "tags"     : ["business_center"]
    }, {
        "order"    : 1873,
        "id"       : 871,
        "name"     : "business",
        "prevSize" : 32,
        "code"     : 59789,
        "ligatures": "business",
        "tags"     : ["business"]
    }, {
        "order"    : 1874,
        "id"       : 870,
        "name"     : "cached",
        "prevSize" : 32,
        "code"     : 59790,
        "ligatures": "cached",
        "tags"     : ["cached"]
    }, {
        "order"    : 1875,
        "id"       : 869,
        "name"     : "cake",
        "prevSize" : 32,
        "code"     : 59791,
        "ligatures": "cake",
        "tags"     : ["cake"]
    }, {
        "order"    : 1876,
        "id"       : 868,
        "name"     : "calendar_today",
        "prevSize" : 32,
        "code"     : 59792,
        "ligatures": "calendar_today",
        "tags"     : ["calendar_today"]
    }, {
        "order"    : 1877,
        "id"       : 867,
        "name"     : "calendar_view_day",
        "prevSize" : 32,
        "code"     : 59793,
        "ligatures": "calendar_view_day",
        "tags"     : ["calendar_view_day"]
    }, {
        "order"    : 1878,
        "id"       : 866,
        "name"     : "call_end",
        "prevSize" : 32,
        "code"     : 59794,
        "ligatures": "call_end",
        "tags"     : ["call_end"]
    }, {
        "order"    : 1879,
        "id"       : 865,
        "name"     : "call_made",
        "prevSize" : 32,
        "code"     : 59795,
        "ligatures": "call_made",
        "tags"     : ["call_made"]
    }, {
        "order"    : 1880,
        "id"       : 864,
        "name"     : "call_merge",
        "prevSize" : 32,
        "code"     : 59796,
        "ligatures": "call_merge",
        "tags"     : ["call_merge"]
    }, {
        "order"    : 1881,
        "id"       : 863,
        "name"     : "call_missed_outgoing",
        "prevSize" : 32,
        "code"     : 59797,
        "ligatures": "call_missed_outgoing",
        "tags"     : ["call_missed_outgoing"]
    }, {
        "order"    : 1882,
        "id"       : 862,
        "name"     : "call_missed",
        "prevSize" : 32,
        "code"     : 59798,
        "ligatures": "call_missed",
        "tags"     : ["call_missed"]
    }, {
        "order"    : 1883,
        "id"       : 861,
        "name"     : "call_received",
        "prevSize" : 32,
        "code"     : 59799,
        "ligatures": "call_received",
        "tags"     : ["call_received"]
    }, {
        "order"    : 1884,
        "id"       : 860,
        "name"     : "call_split",
        "prevSize" : 32,
        "code"     : 59800,
        "ligatures": "call_split",
        "tags"     : ["call_split"]
    }, {
        "order"    : 1885,
        "id"       : 859,
        "name"     : "call_to_action",
        "prevSize" : 32,
        "code"     : 59801,
        "ligatures": "call_to_action",
        "tags"     : ["call_to_action"]
    }, {
        "order"    : 1886,
        "id"       : 858,
        "name"     : "call",
        "prevSize" : 32,
        "code"     : 59802,
        "ligatures": "call",
        "tags"     : ["call"]
    }, {
        "order"    : 1887,
        "id"       : 857,
        "name"     : "camera_alt",
        "prevSize" : 32,
        "code"     : 59803,
        "ligatures": "camera_alt",
        "tags"     : ["camera_alt"]
    }, {
        "order"    : 1888,
        "id"       : 856,
        "name"     : "camera_enhance",
        "prevSize" : 32,
        "code"     : 59804,
        "ligatures": "camera_enhance",
        "tags"     : ["camera_enhance"]
    }, {
        "order"    : 1889,
        "id"       : 855,
        "name"     : "camera_front",
        "prevSize" : 32,
        "code"     : 59805,
        "ligatures": "camera_front",
        "tags"     : ["camera_front"]
    }, {
        "order"    : 1890,
        "id"       : 854,
        "name"     : "camera_rear",
        "prevSize" : 32,
        "code"     : 59806,
        "ligatures": "camera_rear",
        "tags"     : ["camera_rear"]
    }, {
        "order"    : 1891,
        "id"       : 853,
        "name"     : "camera_roll",
        "prevSize" : 32,
        "code"     : 59807,
        "ligatures": "camera_roll",
        "tags"     : ["camera_roll"]
    }, {
        "order"    : 1892,
        "id"       : 852,
        "name"     : "camera",
        "prevSize" : 32,
        "code"     : 59808,
        "ligatures": "camera",
        "tags"     : ["camera"]
    }, {
        "order"    : 1893,
        "id"       : 851,
        "name"     : "cancel_presentation",
        "prevSize" : 32,
        "code"     : 59809,
        "ligatures": "cancel_presentation",
        "tags"     : ["cancel_presentation"]
    }, {
        "order"    : 1894,
        "id"       : 850,
        "name"     : "cancel",
        "prevSize" : 32,
        "code"     : 59810,
        "ligatures": "cancel",
        "tags"     : ["cancel"]
    }, {
        "order"    : 1895,
        "id"       : 849,
        "name"     : "card_giftcard",
        "prevSize" : 32,
        "code"     : 59811,
        "ligatures": "card_giftcard",
        "tags"     : ["card_giftcard"]
    }, {
        "order"    : 1896,
        "id"       : 848,
        "name"     : "card_membership",
        "prevSize" : 32,
        "code"     : 59812,
        "ligatures": "card_membership",
        "tags"     : ["card_membership"]
    }, {
        "order"    : 1897,
        "id"       : 847,
        "name"     : "card_travel",
        "prevSize" : 32,
        "code"     : 59813,
        "ligatures": "card_travel",
        "tags"     : ["card_travel"]
    }, {
        "order"    : 1898,
        "id"       : 846,
        "name"     : "casino",
        "prevSize" : 32,
        "code"     : 59814,
        "ligatures": "casino",
        "tags"     : ["casino"]
    }, {
        "order"    : 1899,
        "id"       : 845,
        "name"     : "cast_connected",
        "prevSize" : 32,
        "code"     : 59815,
        "ligatures": "cast_connected",
        "tags"     : ["cast_connected"]
    }, {
        "order"    : 1900,
        "id"       : 844,
        "name"     : "cast_for_education",
        "prevSize" : 32,
        "code"     : 59816,
        "ligatures": "cast_for_education",
        "tags"     : ["cast_for_education"]
    }, {
        "order"    : 1901,
        "id"       : 843,
        "name"     : "cast",
        "prevSize" : 32,
        "code"     : 59817,
        "ligatures": "cast",
        "tags"     : ["cast"]
    }, {
        "order"    : 1902,
        "id"       : 842,
        "name"     : "category",
        "prevSize" : 32,
        "code"     : 59818,
        "ligatures": "category",
        "tags"     : ["category"]
    }, {
        "order"    : 1903,
        "id"       : 841,
        "name"     : "center_focus_strong",
        "prevSize" : 32,
        "code"     : 59819,
        "ligatures": "center_focus_strong",
        "tags"     : ["center_focus_strong"]
    }, {
        "order"    : 1904,
        "id"       : 840,
        "name"     : "center_focus_weak",
        "prevSize" : 32,
        "code"     : 59820,
        "ligatures": "center_focus_weak",
        "tags"     : ["center_focus_weak"]
    }, {
        "order"    : 1905,
        "id"       : 839,
        "name"     : "change_history",
        "prevSize" : 32,
        "code"     : 59821,
        "ligatures": "change_history",
        "tags"     : ["change_history"]
    }, {
        "order"    : 1906,
        "id"       : 838,
        "name"     : "chat_bubble_outline",
        "prevSize" : 32,
        "code"     : 59822,
        "ligatures": "chat_bubble_outline",
        "tags"     : ["chat_bubble_outline"]
    }, {
        "order"    : 1907,
        "id"       : 837,
        "name"     : "chat_bubble",
        "prevSize" : 32,
        "code"     : 59823,
        "ligatures": "chat_bubble",
        "tags"     : ["chat_bubble"]
    }, {
        "order"    : 1908,
        "id"       : 836,
        "name"     : "chat",
        "prevSize" : 32,
        "code"     : 59824,
        "ligatures": "chat",
        "tags"     : ["chat"]
    }, {
        "order"    : 1909,
        "id"       : 835,
        "name"     : "check_box_outline_blank",
        "prevSize" : 32,
        "code"     : 59825,
        "ligatures": "check_box_outline_blank",
        "tags"     : ["check_box_outline_blank"]
    }, {
        "order"    : 1910,
        "id"       : 834,
        "name"     : "check_box",
        "prevSize" : 32,
        "code"     : 59826,
        "ligatures": "check_box",
        "tags"     : ["check_box"]
    }, {
        "order"    : 1911,
        "id"       : 833,
        "name"     : "check_circle_outline",
        "prevSize" : 32,
        "code"     : 59827,
        "ligatures": "check_circle_outline",
        "tags"     : ["check_circle_outline"]
    }, {
        "order"    : 1912,
        "id"       : 832,
        "name"     : "check_circle",
        "prevSize" : 32,
        "code"     : 59828,
        "ligatures": "check_circle",
        "tags"     : ["check_circle"]
    }, {
        "order"    : 1913,
        "id"       : 831,
        "name"     : "check",
        "prevSize" : 32,
        "code"     : 59829,
        "ligatures": "check",
        "tags"     : ["check"]
    }, {
        "order"    : 1914,
        "id"       : 830,
        "name"     : "chevron_left",
        "prevSize" : 32,
        "code"     : 59830,
        "ligatures": "chevron_left",
        "tags"     : ["chevron_left"]
    }, {
        "order"    : 1915,
        "id"       : 829,
        "name"     : "chevron_right",
        "prevSize" : 32,
        "code"     : 59831,
        "ligatures": "chevron_right",
        "tags"     : ["chevron_right"]
    }, {
        "order"    : 1916,
        "id"       : 828,
        "name"     : "child_care",
        "prevSize" : 32,
        "code"     : 59832,
        "ligatures": "child_care",
        "tags"     : ["child_care"]
    }, {
        "order"    : 1917,
        "id"       : 827,
        "name"     : "child_friendly",
        "prevSize" : 32,
        "code"     : 59833,
        "ligatures": "child_friendly",
        "tags"     : ["child_friendly"]
    }, {
        "order"    : 1918,
        "id"       : 826,
        "name"     : "chrome_reader_mode",
        "prevSize" : 32,
        "code"     : 59834,
        "ligatures": "chrome_reader_mode",
        "tags"     : ["chrome_reader_mode"]
    }, {
        "order"    : 1919,
        "id"       : 825,
        "name"     : "class",
        "prevSize" : 32,
        "code"     : 59835,
        "ligatures": "class",
        "tags"     : ["class"]
    }, {
        "order"    : 1920,
        "id"       : 824,
        "name"     : "clear_all",
        "prevSize" : 32,
        "code"     : 59836,
        "ligatures": "clear_all",
        "tags"     : ["clear_all"]
    }, {
        "order"    : 1921,
        "id"       : 823,
        "name"     : "clear",
        "prevSize" : 32,
        "code"     : 59837,
        "ligatures": "clear",
        "tags"     : ["clear"]
    }, {
        "order"    : 1922,
        "id"       : 822,
        "name"     : "close",
        "prevSize" : 32,
        "code"     : 59838,
        "ligatures": "close",
        "tags"     : ["close"]
    }, {
        "order"    : 1923,
        "id"       : 821,
        "name"     : "closed_caption",
        "prevSize" : 32,
        "code"     : 59839,
        "ligatures": "closed_caption",
        "tags"     : ["closed_caption"]
    }, {
        "order"    : 1924,
        "id"       : 820,
        "name"     : "cloud_circle",
        "prevSize" : 32,
        "code"     : 59840,
        "ligatures": "cloud_circle",
        "tags"     : ["cloud_circle"]
    }, {
        "order"    : 1925,
        "id"       : 819,
        "name"     : "cloud_done",
        "prevSize" : 32,
        "code"     : 59841,
        "ligatures": "cloud_done",
        "tags"     : ["cloud_done"]
    }, {
        "order"    : 1926,
        "id"       : 818,
        "name"     : "cloud_download",
        "prevSize" : 32,
        "code"     : 59842,
        "ligatures": "cloud_download",
        "tags"     : ["cloud_download"]
    }, {
        "order"    : 1927,
        "id"       : 817,
        "name"     : "cloud_off",
        "prevSize" : 32,
        "code"     : 59843,
        "ligatures": "cloud_off",
        "tags"     : ["cloud_off"]
    }, {
        "order"    : 1928,
        "id"       : 816,
        "name"     : "cloud_queue",
        "prevSize" : 32,
        "code"     : 59844,
        "ligatures": "cloud_queue",
        "tags"     : ["cloud_queue"]
    }, {
        "order"    : 1929,
        "id"       : 815,
        "name"     : "cloud_upload",
        "prevSize" : 32,
        "code"     : 59845,
        "ligatures": "cloud_upload",
        "tags"     : ["cloud_upload"]
    }, {
        "order"    : 1930,
        "id"       : 814,
        "name"     : "cloud",
        "prevSize" : 32,
        "code"     : 59846,
        "ligatures": "cloud",
        "tags"     : ["cloud"]
    }, {
        "order"    : 1931,
        "id"       : 813,
        "name"     : "code",
        "prevSize" : 32,
        "code"     : 59847,
        "ligatures": "code",
        "tags"     : ["code"]
    }, {
        "order"    : 1932,
        "id"       : 812,
        "name"     : "collections_bookmark",
        "prevSize" : 32,
        "code"     : 59848,
        "ligatures": "collections_bookmark",
        "tags"     : ["collections_bookmark"]
    }, {
        "order"    : 1933,
        "id"       : 811,
        "name"     : "collections",
        "prevSize" : 32,
        "code"     : 59849,
        "ligatures": "collections",
        "tags"     : ["collections"]
    }, {
        "order"    : 1934,
        "id"       : 810,
        "name"     : "color_lens",
        "prevSize" : 32,
        "code"     : 59850,
        "ligatures": "color_lens",
        "tags"     : ["color_lens"]
    }, {
        "order"    : 1935,
        "id"       : 809,
        "name"     : "colorize",
        "prevSize" : 32,
        "code"     : 59851,
        "ligatures": "colorize",
        "tags"     : ["colorize"]
    }, {
        "order"    : 1936,
        "id"       : 808,
        "name"     : "comment",
        "prevSize" : 32,
        "code"     : 59852,
        "ligatures": "comment",
        "tags"     : ["comment"]
    }, {
        "order"    : 1937,
        "id"       : 807,
        "name"     : "commute",
        "prevSize" : 32,
        "code"     : 59853,
        "ligatures": "commute",
        "tags"     : ["commute"]
    }, {
        "order"    : 1938,
        "id"       : 806,
        "name"     : "compare_arrows",
        "prevSize" : 32,
        "code"     : 59854,
        "ligatures": "compare_arrows",
        "tags"     : ["compare_arrows"]
    }, {
        "order"    : 1939,
        "id"       : 805,
        "name"     : "compare",
        "prevSize" : 32,
        "code"     : 59855,
        "ligatures": "compare",
        "tags"     : ["compare"]
    }, {
        "order"    : 1940,
        "id"       : 804,
        "name"     : "compass_calibration",
        "prevSize" : 32,
        "code"     : 59856,
        "ligatures": "compass_calibration",
        "tags"     : ["compass_calibration"]
    }, {
        "order"    : 1941,
        "id"       : 803,
        "name"     : "computer",
        "prevSize" : 32,
        "code"     : 59857,
        "ligatures": "computer",
        "tags"     : ["computer"]
    }, {
        "order"    : 1942,
        "id"       : 802,
        "name"     : "confirmation_number",
        "prevSize" : 32,
        "code"     : 59858,
        "ligatures": "confirmation_number",
        "tags"     : ["confirmation_number"]
    }, {
        "order"    : 1943,
        "id"       : 801,
        "name"     : "contact_mail",
        "prevSize" : 32,
        "code"     : 59859,
        "ligatures": "contact_mail",
        "tags"     : ["contact_mail"]
    }, {
        "order"    : 1944,
        "id"       : 800,
        "name"     : "contact_phone",
        "prevSize" : 32,
        "code"     : 59860,
        "ligatures": "contact_phone",
        "tags"     : ["contact_phone"]
    }, {
        "order"    : 1945,
        "id"       : 799,
        "name"     : "contact_support",
        "prevSize" : 32,
        "code"     : 59861,
        "ligatures": "contact_support",
        "tags"     : ["contact_support"]
    }, {
        "order"    : 1946,
        "id"       : 798,
        "name"     : "contacts",
        "prevSize" : 32,
        "code"     : 59862,
        "ligatures": "contacts",
        "tags"     : ["contacts"]
    }, {
        "order"    : 1947,
        "id"       : 797,
        "name"     : "control_camera",
        "prevSize" : 32,
        "code"     : 59863,
        "ligatures": "control_camera",
        "tags"     : ["control_camera"]
    }, {
        "order"    : 1948,
        "id"       : 796,
        "name"     : "control_point_duplicate",
        "prevSize" : 32,
        "code"     : 59864,
        "ligatures": "control_point_duplicate",
        "tags"     : ["control_point_duplicate"]
    }, {
        "order"    : 1949,
        "id"       : 795,
        "name"     : "control_point",
        "prevSize" : 32,
        "code"     : 59865,
        "ligatures": "control_point",
        "tags"     : ["control_point"]
    }, {
        "order"    : 1950,
        "id"       : 794,
        "name"     : "copyright",
        "prevSize" : 32,
        "code"     : 59866,
        "ligatures": "copyright",
        "tags"     : ["copyright"]
    }, {
        "order"    : 1951,
        "id"       : 793,
        "name"     : "create_new_folder",
        "prevSize" : 32,
        "code"     : 59867,
        "ligatures": "create_new_folder",
        "tags"     : ["create_new_folder"]
    }, {
        "order"    : 1952,
        "id"       : 792,
        "name"     : "create",
        "prevSize" : 32,
        "code"     : 59868,
        "ligatures": "create",
        "tags"     : ["create"]
    }, {
        "order"    : 1953,
        "id"       : 791,
        "name"     : "credit_card",
        "prevSize" : 32,
        "code"     : 59869,
        "ligatures": "credit_card",
        "tags"     : ["credit_card"]
    }, {
        "order"    : 1954,
        "id"       : 790,
        "name"     : "crop_3_2",
        "prevSize" : 32,
        "code"     : 59870,
        "ligatures": "crop_3_2",
        "tags"     : ["crop_3_2"]
    }, {
        "order"    : 1955,
        "id"       : 789,
        "name"     : "crop_5_4",
        "prevSize" : 32,
        "code"     : 59871,
        "ligatures": "crop_5_4",
        "tags"     : ["crop_5_4"]
    }, {
        "order"    : 1956,
        "id"       : 788,
        "name"     : "crop_7_5",
        "prevSize" : 32,
        "code"     : 59872,
        "ligatures": "crop_7_5",
        "tags"     : ["crop_7_5"]
    }, {
        "order"    : 1957,
        "id"       : 787,
        "name"     : "crop_16_9",
        "prevSize" : 32,
        "code"     : 59873,
        "ligatures": "crop_16_9",
        "tags"     : ["crop_16_9"]
    }, {
        "order"    : 1958,
        "id"       : 786,
        "name"     : "crop_din",
        "prevSize" : 32,
        "code"     : 59874,
        "ligatures": "crop_din",
        "tags"     : ["crop_din"]
    }, {
        "order"    : 1959,
        "id"       : 785,
        "name"     : "crop_free",
        "prevSize" : 32,
        "code"     : 59875,
        "ligatures": "crop_free",
        "tags"     : ["crop_free"]
    }, {
        "order"    : 1960,
        "id"       : 784,
        "name"     : "crop_landscape",
        "prevSize" : 32,
        "code"     : 59876,
        "ligatures": "crop_landscape",
        "tags"     : ["crop_landscape"]
    }, {
        "order"    : 1961,
        "id"       : 783,
        "name"     : "crop_original",
        "prevSize" : 32,
        "code"     : 59877,
        "ligatures": "crop_original",
        "tags"     : ["crop_original"]
    }, {
        "order"    : 1962,
        "id"       : 782,
        "name"     : "crop_portrait",
        "prevSize" : 32,
        "code"     : 59878,
        "ligatures": "crop_portrait",
        "tags"     : ["crop_portrait"]
    }, {
        "order"    : 1963,
        "id"       : 781,
        "name"     : "crop_rotate",
        "prevSize" : 32,
        "code"     : 59879,
        "ligatures": "crop_rotate",
        "tags"     : ["crop_rotate"]
    }, {
        "order"    : 1964,
        "id"       : 780,
        "name"     : "crop_square",
        "prevSize" : 32,
        "code"     : 59880,
        "ligatures": "crop_square",
        "tags"     : ["crop_square"]
    }, {
        "order"    : 1965,
        "id"       : 779,
        "name"     : "crop",
        "prevSize" : 32,
        "code"     : 59881,
        "ligatures": "crop",
        "tags"     : ["crop"]
    }, {
        "order"    : 1966,
        "id"       : 778,
        "name"     : "dashboard",
        "prevSize" : 32,
        "code"     : 59882,
        "ligatures": "dashboard",
        "tags"     : ["dashboard"]
    }, {
        "order"    : 1967,
        "id"       : 777,
        "name"     : "data_usage",
        "prevSize" : 32,
        "code"     : 59883,
        "ligatures": "data_usage",
        "tags"     : ["data_usage"]
    }, {
        "order"    : 1968,
        "id"       : 776,
        "name"     : "date_range",
        "prevSize" : 32,
        "code"     : 59884,
        "ligatures": "date_range",
        "tags"     : ["date_range"]
    }, {
        "order"    : 1969,
        "id"       : 775,
        "name"     : "dehaze",
        "prevSize" : 32,
        "code"     : 59885,
        "ligatures": "dehaze",
        "tags"     : ["dehaze"]
    }, {
        "order"    : 1970,
        "id"       : 774,
        "name"     : "delete_forever",
        "prevSize" : 32,
        "code"     : 59886,
        "ligatures": "delete_forever",
        "tags"     : ["delete_forever"]
    }, {
        "order"    : 1971,
        "id"       : 773,
        "name"     : "delete_outline",
        "prevSize" : 32,
        "code"     : 59887,
        "ligatures": "delete_outline",
        "tags"     : ["delete_outline"]
    }, {
        "order"    : 1972,
        "id"       : 772,
        "name"     : "delete_sweep",
        "prevSize" : 32,
        "code"     : 59888,
        "ligatures": "delete_sweep",
        "tags"     : ["delete_sweep"]
    }, {
        "order"    : 1973,
        "id"       : 771,
        "name"     : "delete",
        "prevSize" : 32,
        "code"     : 59889,
        "ligatures": "delete",
        "tags"     : ["delete"]
    }, {
        "order"    : 1974,
        "id"       : 770,
        "name"     : "departure_board",
        "prevSize" : 32,
        "code"     : 59890,
        "ligatures": "departure_board",
        "tags"     : ["departure_board"]
    }, {
        "order"    : 1975,
        "id"       : 769,
        "name"     : "description",
        "prevSize" : 32,
        "code"     : 59891,
        "ligatures": "description",
        "tags"     : ["description"]
    }, {
        "order"    : 1976,
        "id"       : 768,
        "name"     : "desktop_access_disabled",
        "prevSize" : 32,
        "code"     : 59892,
        "ligatures": "desktop_access_disabled",
        "tags"     : ["desktop_access_disabled"]
    }, {
        "order"    : 1977,
        "id"       : 767,
        "name"     : "desktop_mac",
        "prevSize" : 32,
        "code"     : 59893,
        "ligatures": "desktop_mac",
        "tags"     : ["desktop_mac"]
    }, {
        "order"    : 1978,
        "id"       : 766,
        "name"     : "desktop_windows",
        "prevSize" : 32,
        "code"     : 59894,
        "ligatures": "desktop_windows",
        "tags"     : ["desktop_windows"]
    }, {
        "order"    : 1979,
        "id"       : 765,
        "name"     : "details",
        "prevSize" : 32,
        "code"     : 59895,
        "ligatures": "details",
        "tags"     : ["details"]
    }, {
        "order"    : 1980,
        "id"       : 764,
        "name"     : "developer_board",
        "prevSize" : 32,
        "code"     : 59896,
        "ligatures": "developer_board",
        "tags"     : ["developer_board"]
    }, {
        "order"    : 1981,
        "id"       : 763,
        "name"     : "developer_mode",
        "prevSize" : 32,
        "code"     : 59897,
        "ligatures": "developer_mode",
        "tags"     : ["developer_mode"]
    }, {
        "order"    : 1982,
        "id"       : 762,
        "name"     : "device_hub",
        "prevSize" : 32,
        "code"     : 59898,
        "ligatures": "device_hub",
        "tags"     : ["device_hub"]
    }, {
        "order"    : 1983,
        "id"       : 761,
        "name"     : "device_unknown",
        "prevSize" : 32,
        "code"     : 59899,
        "ligatures": "device_unknown",
        "tags"     : ["device_unknown"]
    }, {
        "order"    : 1984,
        "id"       : 760,
        "name"     : "devices_other",
        "prevSize" : 32,
        "code"     : 59900,
        "ligatures": "devices_other",
        "tags"     : ["devices_other"]
    }, {
        "order"    : 1985,
        "id"       : 759,
        "name"     : "devices",
        "prevSize" : 32,
        "code"     : 59901,
        "ligatures": "devices",
        "tags"     : ["devices"]
    }, {
        "order"    : 1986,
        "id"       : 758,
        "name"     : "dialer_sip",
        "prevSize" : 32,
        "code"     : 59902,
        "ligatures": "dialer_sip",
        "tags"     : ["dialer_sip"]
    }, {
        "order"    : 1987,
        "id"       : 757,
        "name"     : "dialpad",
        "prevSize" : 32,
        "code"     : 59903,
        "ligatures": "dialpad",
        "tags"     : ["dialpad"]
    }, {
        "order"    : 1988,
        "id"       : 756,
        "name"     : "directions_bike",
        "prevSize" : 32,
        "code"     : 59904,
        "ligatures": "directions_bike",
        "tags"     : ["directions_bike"]
    }, {
        "order"    : 1989,
        "id"       : 755,
        "name"     : "directions_boat",
        "prevSize" : 32,
        "code"     : 59905,
        "ligatures": "directions_boat",
        "tags"     : ["directions_boat"]
    }, {
        "order"    : 1990,
        "id"       : 754,
        "name"     : "directions_bus",
        "prevSize" : 32,
        "code"     : 59906,
        "ligatures": "directions_bus",
        "tags"     : ["directions_bus"]
    }, {
        "order"    : 1991,
        "id"       : 753,
        "name"     : "directions_car",
        "prevSize" : 32,
        "code"     : 59907,
        "ligatures": "directions_car",
        "tags"     : ["directions_car"]
    }, {
        "order"    : 1992,
        "id"       : 752,
        "name"     : "directions_railway",
        "prevSize" : 32,
        "code"     : 59908,
        "ligatures": "directions_railway",
        "tags"     : ["directions_railway"]
    }, {
        "order"    : 1993,
        "id"       : 751,
        "name"     : "directions_run",
        "prevSize" : 32,
        "code"     : 59909,
        "ligatures": "directions_run",
        "tags"     : ["directions_run"]
    }, {
        "order"    : 1994,
        "id"       : 750,
        "name"     : "directions_subway",
        "prevSize" : 32,
        "code"     : 59910,
        "ligatures": "directions_subway",
        "tags"     : ["directions_subway"]
    }, {
        "order"    : 1995,
        "id"       : 749,
        "name"     : "directions_transit",
        "prevSize" : 32,
        "code"     : 59911,
        "ligatures": "directions_transit",
        "tags"     : ["directions_transit"]
    }, {
        "order"    : 1996,
        "id"       : 748,
        "name"     : "directions_walk",
        "prevSize" : 32,
        "code"     : 59912,
        "ligatures": "directions_walk",
        "tags"     : ["directions_walk"]
    }, {
        "order"    : 1997,
        "id"       : 747,
        "name"     : "directions",
        "prevSize" : 32,
        "code"     : 59913,
        "ligatures": "directions",
        "tags"     : ["directions"]
    }, {
        "order"    : 1998,
        "id"       : 746,
        "name"     : "disc_full",
        "prevSize" : 32,
        "code"     : 59914,
        "ligatures": "disc_full",
        "tags"     : ["disc_full"]
    }, {
        "order"    : 1999,
        "id"       : 745,
        "name"     : "dns",
        "prevSize" : 32,
        "code"     : 59915,
        "ligatures": "dns",
        "tags"     : ["dns"]
    }, {
        "order"    : 2000,
        "id"       : 744,
        "name"     : "dock",
        "prevSize" : 32,
        "code"     : 59916,
        "ligatures": "dock",
        "tags"     : ["dock"]
    }, {
        "order"    : 2001,
        "id"       : 743,
        "name"     : "domain_disabled",
        "prevSize" : 32,
        "code"     : 59917,
        "ligatures": "domain_disabled",
        "tags"     : ["domain_disabled"]
    }, {
        "order"    : 2002,
        "id"       : 742,
        "name"     : "domain",
        "prevSize" : 32,
        "code"     : 59918,
        "ligatures": "domain",
        "tags"     : ["domain"]
    }, {
        "order"    : 2003,
        "id"       : 741,
        "name"     : "done_all",
        "prevSize" : 32,
        "code"     : 59919,
        "ligatures": "done_all",
        "tags"     : ["done_all"]
    }, {
        "order"    : 2004,
        "id"       : 740,
        "name"     : "done_outline",
        "prevSize" : 32,
        "code"     : 59920,
        "ligatures": "done_outline",
        "tags"     : ["done_outline"]
    }, {
        "order"    : 2005,
        "id"       : 739,
        "name"     : "done",
        "prevSize" : 32,
        "code"     : 59921,
        "ligatures": "done",
        "tags"     : ["done"]
    }, {
        "order"    : 2006,
        "id"       : 738,
        "name"     : "donut_large",
        "prevSize" : 32,
        "code"     : 59922,
        "ligatures": "donut_large",
        "tags"     : ["donut_large"]
    }, {
        "order"    : 2007,
        "id"       : 737,
        "name"     : "donut_small",
        "prevSize" : 32,
        "code"     : 59923,
        "ligatures": "donut_small",
        "tags"     : ["donut_small"]
    }, {
        "order"    : 2008,
        "id"       : 736,
        "name"     : "drafts",
        "prevSize" : 32,
        "code"     : 59924,
        "ligatures": "drafts",
        "tags"     : ["drafts"]
    }, {
        "order"    : 2009,
        "id"       : 735,
        "name"     : "drag_handle",
        "prevSize" : 32,
        "code"     : 59925,
        "ligatures": "drag_handle",
        "tags"     : ["drag_handle"]
    }, {
        "order"    : 2010,
        "id"       : 734,
        "name"     : "drag_indicator",
        "prevSize" : 32,
        "code"     : 59926,
        "ligatures": "drag_indicator",
        "tags"     : ["drag_indicator"]
    }, {
        "order"    : 2011,
        "id"       : 733,
        "name"     : "drive_eta",
        "prevSize" : 32,
        "code"     : 59927,
        "ligatures": "drive_eta",
        "tags"     : ["drive_eta"]
    }, {
        "order"    : 2012,
        "id"       : 732,
        "name"     : "duo",
        "prevSize" : 32,
        "code"     : 59928,
        "ligatures": "duo",
        "tags"     : ["duo"]
    }, {
        "order"    : 2013,
        "id"       : 731,
        "name"     : "dvr",
        "prevSize" : 32,
        "code"     : 59929,
        "ligatures": "dvr",
        "tags"     : ["dvr"]
    }, {
        "order"    : 2014,
        "id"       : 730,
        "name"     : "edit_attributes",
        "prevSize" : 32,
        "code"     : 59930,
        "ligatures": "edit_attributes",
        "tags"     : ["edit_attributes"]
    }, {
        "order"    : 2015,
        "id"       : 729,
        "name"     : "edit_location",
        "prevSize" : 32,
        "code"     : 59931,
        "ligatures": "edit_location",
        "tags"     : ["edit_location"]
    }, {
        "order"    : 2016,
        "id"       : 728,
        "name"     : "edit",
        "prevSize" : 32,
        "code"     : 59932,
        "ligatures": "edit",
        "tags"     : ["edit"]
    }, {
        "order"    : 2017,
        "id"       : 727,
        "name"     : "eject",
        "prevSize" : 32,
        "code"     : 59933,
        "ligatures": "eject",
        "tags"     : ["eject"]
    }, {
        "order"    : 2018,
        "id"       : 726,
        "name"     : "email",
        "prevSize" : 32,
        "code"     : 59934,
        "ligatures": "email",
        "tags"     : ["email"]
    }, {
        "order"    : 2019,
        "id"       : 725,
        "name"     : "enhanced_encryption",
        "prevSize" : 32,
        "code"     : 59935,
        "ligatures": "enhanced_encryption",
        "tags"     : ["enhanced_encryption"]
    }, {
        "order"    : 2020,
        "id"       : 724,
        "name"     : "equalizer",
        "prevSize" : 32,
        "code"     : 59936,
        "ligatures": "equalizer",
        "tags"     : ["equalizer"]
    }, {
        "order"    : 2021,
        "id"       : 723,
        "name"     : "error_outline",
        "prevSize" : 32,
        "code"     : 59937,
        "ligatures": "error_outline",
        "tags"     : ["error_outline"]
    }, {
        "order"    : 2022,
        "id"       : 722,
        "name"     : "error",
        "prevSize" : 32,
        "code"     : 59938,
        "ligatures": "error",
        "tags"     : ["error"]
    }, {
        "order"    : 2023,
        "id"       : 721,
        "name"     : "euro_symbol",
        "prevSize" : 32,
        "code"     : 59939,
        "ligatures": "euro_symbol",
        "tags"     : ["euro_symbol"]
    }, {
        "order"    : 2024,
        "id"       : 720,
        "name"     : "ev_station",
        "prevSize" : 32,
        "code"     : 59940,
        "ligatures": "ev_station",
        "tags"     : ["ev_station"]
    }, {
        "order"    : 2025,
        "id"       : 719,
        "name"     : "event_available",
        "prevSize" : 32,
        "code"     : 59941,
        "ligatures": "event_available",
        "tags"     : ["event_available"]
    }, {
        "order"    : 2026,
        "id"       : 718,
        "name"     : "event_busy",
        "prevSize" : 32,
        "code"     : 59942,
        "ligatures": "event_busy",
        "tags"     : ["event_busy"]
    }, {
        "order"    : 2027,
        "id"       : 717,
        "name"     : "event_note",
        "prevSize" : 32,
        "code"     : 59943,
        "ligatures": "event_note",
        "tags"     : ["event_note"]
    }, {
        "order"    : 2028,
        "id"       : 716,
        "name"     : "event_seat",
        "prevSize" : 32,
        "code"     : 59944,
        "ligatures": "event_seat",
        "tags"     : ["event_seat"]
    }, {
        "order"    : 2029,
        "id"       : 715,
        "name"     : "event",
        "prevSize" : 32,
        "code"     : 59945,
        "ligatures": "event",
        "tags"     : ["event"]
    }, {
        "order"    : 2030,
        "id"       : 714,
        "name"     : "exit_to_app",
        "prevSize" : 32,
        "code"     : 59946,
        "ligatures": "exit_to_app",
        "tags"     : ["exit_to_app"]
    }, {
        "order"    : 2031,
        "id"       : 713,
        "name"     : "expand_less",
        "prevSize" : 32,
        "code"     : 59947,
        "ligatures": "expand_less",
        "tags"     : ["expand_less"]
    }, {
        "order"    : 2032,
        "id"       : 712,
        "name"     : "expand_more",
        "prevSize" : 32,
        "code"     : 59948,
        "ligatures": "expand_more",
        "tags"     : ["expand_more"]
    }, {
        "order"    : 2033,
        "id"       : 711,
        "name"     : "explicit",
        "prevSize" : 32,
        "code"     : 59949,
        "ligatures": "explicit",
        "tags"     : ["explicit"]
    }, {
        "order"    : 2034,
        "id"       : 710,
        "name"     : "explore_off",
        "prevSize" : 32,
        "code"     : 59950,
        "ligatures": "explore_off",
        "tags"     : ["explore_off"]
    }, {
        "order"    : 2035,
        "id"       : 709,
        "name"     : "explore",
        "prevSize" : 32,
        "code"     : 59951,
        "ligatures": "explore",
        "tags"     : ["explore"]
    }, {
        "order"    : 2036,
        "id"       : 708,
        "name"     : "exposure_neg_1",
        "prevSize" : 32,
        "code"     : 59952,
        "ligatures": "exposure_neg_1",
        "tags"     : ["exposure_neg_1"]
    }, {
        "order"    : 2037,
        "id"       : 707,
        "name"     : "exposure_neg_2",
        "prevSize" : 32,
        "code"     : 59953,
        "ligatures": "exposure_neg_2",
        "tags"     : ["exposure_neg_2"]
    }, {
        "order"    : 2038,
        "id"       : 706,
        "name"     : "exposure_plus_1",
        "prevSize" : 32,
        "code"     : 59954,
        "ligatures": "exposure_plus_1",
        "tags"     : ["exposure_plus_1"]
    }, {
        "order"    : 2039,
        "id"       : 705,
        "name"     : "exposure_plus_2",
        "prevSize" : 32,
        "code"     : 59955,
        "ligatures": "exposure_plus_2",
        "tags"     : ["exposure_plus_2"]
    }, {
        "order"    : 2040,
        "id"       : 704,
        "name"     : "exposure_zero",
        "prevSize" : 32,
        "code"     : 59956,
        "ligatures": "exposure_zero",
        "tags"     : ["exposure_zero"]
    }, {
        "order"    : 2041,
        "id"       : 703,
        "name"     : "exposure",
        "prevSize" : 32,
        "code"     : 59957,
        "ligatures": "exposure",
        "tags"     : ["exposure"]
    }, {
        "order"    : 2042,
        "id"       : 702,
        "name"     : "extension",
        "prevSize" : 32,
        "code"     : 59958,
        "ligatures": "extension",
        "tags"     : ["extension"]
    }, {
        "order"    : 2043,
        "id"       : 701,
        "name"     : "face",
        "prevSize" : 32,
        "code"     : 59959,
        "ligatures": "face",
        "tags"     : ["face"]
    }, {
        "order"    : 2044,
        "id"       : 700,
        "name"     : "fast_forward",
        "prevSize" : 32,
        "code"     : 59960,
        "ligatures": "fast_forward",
        "tags"     : ["fast_forward"]
    }, {
        "order"    : 2045,
        "id"       : 699,
        "name"     : "fast_rewind",
        "prevSize" : 32,
        "code"     : 59961,
        "ligatures": "fast_rewind",
        "tags"     : ["fast_rewind"]
    }, {
        "order"    : 2046,
        "id"       : 698,
        "name"     : "fastfood",
        "prevSize" : 32,
        "code"     : 59962,
        "ligatures": "fastfood",
        "tags"     : ["fastfood"]
    }, {
        "order"    : 2047,
        "id"       : 697,
        "name"     : "favorite_border",
        "prevSize" : 32,
        "code"     : 59963,
        "ligatures": "favorite_border",
        "tags"     : ["favorite_border"]
    }, {
        "order"    : 2048,
        "id"       : 696,
        "name"     : "favorite",
        "prevSize" : 32,
        "code"     : 59964,
        "ligatures": "favorite",
        "tags"     : ["favorite"]
    }, {
        "order"    : 2049,
        "id"       : 695,
        "name"     : "featured_play_list",
        "prevSize" : 32,
        "code"     : 59965,
        "ligatures": "featured_play_list",
        "tags"     : ["featured_play_list"]
    }, {
        "order"    : 2050,
        "id"       : 694,
        "name"     : "featured_video",
        "prevSize" : 32,
        "code"     : 59966,
        "ligatures": "featured_video",
        "tags"     : ["featured_video"]
    }, {
        "order"    : 2051,
        "id"       : 693,
        "name"     : "feedback",
        "prevSize" : 32,
        "code"     : 59967,
        "ligatures": "feedback",
        "tags"     : ["feedback"]
    }, {
        "order"    : 2052,
        "id"       : 692,
        "name"     : "fiber_dvr",
        "prevSize" : 32,
        "code"     : 59968,
        "ligatures": "fiber_dvr",
        "tags"     : ["fiber_dvr"]
    }, {
        "order"    : 2053,
        "id"       : 691,
        "name"     : "fiber_manual_record",
        "prevSize" : 32,
        "code"     : 59969,
        "ligatures": "fiber_manual_record",
        "tags"     : ["fiber_manual_record"]
    }, {
        "order"    : 2054,
        "id"       : 690,
        "name"     : "fiber_new",
        "prevSize" : 32,
        "code"     : 59970,
        "ligatures": "fiber_new",
        "tags"     : ["fiber_new"]
    }, {
        "order"    : 2055,
        "id"       : 689,
        "name"     : "fiber_pin",
        "prevSize" : 32,
        "code"     : 59971,
        "ligatures": "fiber_pin",
        "tags"     : ["fiber_pin"]
    }, {
        "order"    : 2056,
        "id"       : 688,
        "name"     : "fiber_smart_record",
        "prevSize" : 32,
        "code"     : 59972,
        "ligatures": "fiber_smart_record",
        "tags"     : ["fiber_smart_record"]
    }, {
        "order"    : 2057,
        "id"       : 687,
        "name"     : "file_copy",
        "prevSize" : 32,
        "code"     : 59973,
        "ligatures": "file_copy",
        "tags"     : ["file_copy"]
    }, {
        "order"    : 2058,
        "id"       : 686,
        "name"     : "filter_1",
        "prevSize" : 32,
        "code"     : 59974,
        "ligatures": "filter_1",
        "tags"     : ["filter_1"]
    }, {
        "order"    : 2059,
        "id"       : 685,
        "name"     : "filter_2",
        "prevSize" : 32,
        "code"     : 59975,
        "ligatures": "filter_2",
        "tags"     : ["filter_2"]
    }, {
        "order"    : 2060,
        "id"       : 684,
        "name"     : "filter_3",
        "prevSize" : 32,
        "code"     : 59976,
        "ligatures": "filter_3",
        "tags"     : ["filter_3"]
    }, {
        "order"    : 2061,
        "id"       : 683,
        "name"     : "filter_4",
        "prevSize" : 32,
        "code"     : 59977,
        "ligatures": "filter_4",
        "tags"     : ["filter_4"]
    }, {
        "order"    : 2062,
        "id"       : 682,
        "name"     : "filter_5",
        "prevSize" : 32,
        "code"     : 59978,
        "ligatures": "filter_5",
        "tags"     : ["filter_5"]
    }, {
        "order"    : 2063,
        "id"       : 681,
        "name"     : "filter_6",
        "prevSize" : 32,
        "code"     : 59979,
        "ligatures": "filter_6",
        "tags"     : ["filter_6"]
    }, {
        "order"    : 2064,
        "id"       : 680,
        "name"     : "filter_7",
        "prevSize" : 32,
        "code"     : 59980,
        "ligatures": "filter_7",
        "tags"     : ["filter_7"]
    }, {
        "order"    : 2065,
        "id"       : 679,
        "name"     : "filter_8",
        "prevSize" : 32,
        "code"     : 59981,
        "ligatures": "filter_8",
        "tags"     : ["filter_8"]
    }, {
        "order"    : 2066,
        "id"       : 678,
        "name"     : "filter_9_plus",
        "prevSize" : 32,
        "code"     : 59982,
        "ligatures": "filter_9_plus",
        "tags"     : ["filter_9_plus"]
    }, {
        "order"    : 2067,
        "id"       : 677,
        "name"     : "filter_9",
        "prevSize" : 32,
        "code"     : 59983,
        "ligatures": "filter_9",
        "tags"     : ["filter_9"]
    }, {
        "order"    : 2068,
        "id"       : 676,
        "name"     : "filter_b_and_w",
        "prevSize" : 32,
        "code"     : 59984,
        "ligatures": "filter_b_and_w",
        "tags"     : ["filter_b_and_w"]
    }, {
        "order"    : 2069,
        "id"       : 675,
        "name"     : "filter_center_focus",
        "prevSize" : 32,
        "code"     : 59985,
        "ligatures": "filter_center_focus",
        "tags"     : ["filter_center_focus"]
    }, {
        "order"    : 2070,
        "id"       : 674,
        "name"     : "filter_drama",
        "prevSize" : 32,
        "code"     : 59986,
        "ligatures": "filter_drama",
        "tags"     : ["filter_drama"]
    }, {
        "order"    : 2071,
        "id"       : 673,
        "name"     : "filter_frames",
        "prevSize" : 32,
        "code"     : 59987,
        "ligatures": "filter_frames",
        "tags"     : ["filter_frames"]
    }, {
        "order"    : 2072,
        "id"       : 672,
        "name"     : "filter_hdr",
        "prevSize" : 32,
        "code"     : 59988,
        "ligatures": "filter_hdr",
        "tags"     : ["filter_hdr"]
    }, {
        "order"    : 2073,
        "id"       : 671,
        "name"     : "filter_list",
        "prevSize" : 32,
        "code"     : 59989,
        "ligatures": "filter_list",
        "tags"     : ["filter_list"]
    }, {
        "order"    : 2074,
        "id"       : 670,
        "name"     : "filter_none",
        "prevSize" : 32,
        "code"     : 59990,
        "ligatures": "filter_none",
        "tags"     : ["filter_none"]
    }, {
        "order"    : 2075,
        "id"       : 669,
        "name"     : "filter_tilt_shift",
        "prevSize" : 32,
        "code"     : 59991,
        "ligatures": "filter_tilt_shift",
        "tags"     : ["filter_tilt_shift"]
    }, {
        "order"    : 2076,
        "id"       : 668,
        "name"     : "filter_vintage",
        "prevSize" : 32,
        "code"     : 59992,
        "ligatures": "filter_vintage",
        "tags"     : ["filter_vintage"]
    }, {
        "order"    : 2077,
        "id"       : 667,
        "name"     : "filter",
        "prevSize" : 32,
        "code"     : 59993,
        "ligatures": "filter",
        "tags"     : ["filter"]
    }, {
        "order"    : 2078,
        "id"       : 666,
        "name"     : "find_in_page",
        "prevSize" : 32,
        "code"     : 59994,
        "ligatures": "find_in_page",
        "tags"     : ["find_in_page"]
    }, {
        "order"    : 2079,
        "id"       : 665,
        "name"     : "find_replace",
        "prevSize" : 32,
        "code"     : 59995,
        "ligatures": "find_replace",
        "tags"     : ["find_replace"]
    }, {
        "order"    : 2080,
        "id"       : 664,
        "name"     : "fingerprint",
        "prevSize" : 32,
        "code"     : 59996,
        "ligatures": "fingerprint",
        "tags"     : ["fingerprint"]
    }, {
        "order"    : 2081,
        "id"       : 663,
        "name"     : "first_page",
        "prevSize" : 32,
        "code"     : 59997,
        "ligatures": "first_page",
        "tags"     : ["first_page"]
    }, {
        "order"    : 2082,
        "id"       : 662,
        "name"     : "fitness_center",
        "prevSize" : 32,
        "code"     : 59998,
        "ligatures": "fitness_center",
        "tags"     : ["fitness_center"]
    }, {
        "order"    : 2083,
        "id"       : 661,
        "name"     : "flag",
        "prevSize" : 32,
        "code"     : 59999,
        "ligatures": "flag",
        "tags"     : ["flag"]
    }, {
        "order"    : 2084,
        "id"       : 660,
        "name"     : "flare",
        "prevSize" : 32,
        "code"     : 60000,
        "ligatures": "flare",
        "tags"     : ["flare"]
    }, {
        "order"    : 2085,
        "id"       : 659,
        "name"     : "flash_auto",
        "prevSize" : 32,
        "code"     : 60001,
        "ligatures": "flash_auto",
        "tags"     : ["flash_auto"]
    }, {
        "order"    : 2086,
        "id"       : 658,
        "name"     : "flash_off",
        "prevSize" : 32,
        "code"     : 60002,
        "ligatures": "flash_off",
        "tags"     : ["flash_off"]
    }, {
        "order"    : 2087,
        "id"       : 657,
        "name"     : "flash_on",
        "prevSize" : 32,
        "code"     : 60003,
        "ligatures": "flash_on",
        "tags"     : ["flash_on"]
    }, {
        "order"    : 2088,
        "id"       : 656,
        "name"     : "flight_land",
        "prevSize" : 32,
        "code"     : 60004,
        "ligatures": "flight_land",
        "tags"     : ["flight_land"]
    }, {
        "order"    : 2089,
        "id"       : 655,
        "name"     : "flight_takeoff",
        "prevSize" : 32,
        "code"     : 60005,
        "ligatures": "flight_takeoff",
        "tags"     : ["flight_takeoff"]
    }, {
        "order"    : 2090,
        "id"       : 654,
        "name"     : "flight",
        "prevSize" : 32,
        "code"     : 60006,
        "ligatures": "flight",
        "tags"     : ["flight"]
    }, {
        "order"    : 2091,
        "id"       : 653,
        "name"     : "flip_to_back",
        "prevSize" : 32,
        "code"     : 60007,
        "ligatures": "flip_to_back",
        "tags"     : ["flip_to_back"]
    }, {
        "order"    : 2092,
        "id"       : 652,
        "name"     : "flip_to_front",
        "prevSize" : 32,
        "code"     : 60008,
        "ligatures": "flip_to_front",
        "tags"     : ["flip_to_front"]
    }, {
        "order"    : 2093,
        "id"       : 651,
        "name"     : "flip",
        "prevSize" : 32,
        "code"     : 60009,
        "ligatures": "flip",
        "tags"     : ["flip"]
    }, {
        "order"    : 2094,
        "id"       : 650,
        "name"     : "folder_open",
        "prevSize" : 32,
        "code"     : 60010,
        "ligatures": "folder_open",
        "tags"     : ["folder_open"]
    }, {
        "order"    : 2095,
        "id"       : 649,
        "name"     : "folder_shared",
        "prevSize" : 32,
        "code"     : 60011,
        "ligatures": "folder_shared",
        "tags"     : ["folder_shared"]
    }, {
        "order"    : 2096,
        "id"       : 648,
        "name"     : "folder_special",
        "prevSize" : 32,
        "code"     : 60012,
        "ligatures": "folder_special",
        "tags"     : ["folder_special"]
    }, {
        "order"    : 2097,
        "id"       : 647,
        "name"     : "folder",
        "prevSize" : 32,
        "code"     : 60013,
        "ligatures": "folder",
        "tags"     : ["folder"]
    }, {
        "order"    : 2098,
        "id"       : 646,
        "name"     : "font_download",
        "prevSize" : 32,
        "code"     : 60014,
        "ligatures": "font_download",
        "tags"     : ["font_download"]
    }, {
        "order"    : 2099,
        "id"       : 645,
        "name"     : "format_align_center",
        "prevSize" : 32,
        "code"     : 60015,
        "ligatures": "format_align_center",
        "tags"     : ["format_align_center"]
    }, {
        "order"    : 2100,
        "id"       : 644,
        "name"     : "format_align_justify",
        "prevSize" : 32,
        "code"     : 60016,
        "ligatures": "format_align_justify",
        "tags"     : ["format_align_justify"]
    }, {
        "order"    : 2101,
        "id"       : 643,
        "name"     : "format_align_left",
        "prevSize" : 32,
        "code"     : 60017,
        "ligatures": "format_align_left",
        "tags"     : ["format_align_left"]
    }, {
        "order"    : 2102,
        "id"       : 642,
        "name"     : "format_align_right",
        "prevSize" : 32,
        "code"     : 60018,
        "ligatures": "format_align_right",
        "tags"     : ["format_align_right"]
    }, {
        "order"    : 2103,
        "id"       : 641,
        "name"     : "format_bold",
        "prevSize" : 32,
        "code"     : 60019,
        "ligatures": "format_bold",
        "tags"     : ["format_bold"]
    }, {
        "order"    : 2104,
        "id"       : 640,
        "name"     : "format_clear",
        "prevSize" : 32,
        "code"     : 60020,
        "ligatures": "format_clear",
        "tags"     : ["format_clear"]
    }, {
        "order"    : 2105,
        "id"       : 639,
        "name"     : "format_color_reset",
        "prevSize" : 32,
        "code"     : 60021,
        "ligatures": "format_color_reset",
        "tags"     : ["format_color_reset"]
    }, {
        "order"    : 2106,
        "id"       : 638,
        "name"     : "format_indent_decrease",
        "prevSize" : 32,
        "code"     : 60022,
        "ligatures": "format_indent_decrease",
        "tags"     : ["format_indent_decrease"]
    }, {
        "order"    : 2107,
        "id"       : 637,
        "name"     : "format_indent_increase",
        "prevSize" : 32,
        "code"     : 60023,
        "ligatures": "format_indent_increase",
        "tags"     : ["format_indent_increase"]
    }, {
        "order"    : 2108,
        "id"       : 636,
        "name"     : "format_italic",
        "prevSize" : 32,
        "code"     : 60024,
        "ligatures": "format_italic",
        "tags"     : ["format_italic"]
    }, {
        "order"    : 2109,
        "id"       : 635,
        "name"     : "format_line_spacing",
        "prevSize" : 32,
        "code"     : 60025,
        "ligatures": "format_line_spacing",
        "tags"     : ["format_line_spacing"]
    }, {
        "order"    : 2110,
        "id"       : 634,
        "name"     : "format_list_bulleted",
        "prevSize" : 32,
        "code"     : 60026,
        "ligatures": "format_list_bulleted",
        "tags"     : ["format_list_bulleted"]
    }, {
        "order"    : 2111,
        "id"       : 633,
        "name"     : "format_list_numbered_rtl",
        "prevSize" : 32,
        "code"     : 60027,
        "ligatures": "format_list_numbered_rtl",
        "tags"     : ["format_list_numbered_rtl"]
    }, {
        "order"    : 2112,
        "id"       : 632,
        "name"     : "format_list_numbered",
        "prevSize" : 32,
        "code"     : 60028,
        "ligatures": "format_list_numbered",
        "tags"     : ["format_list_numbered"]
    }, {
        "order"    : 2113,
        "id"       : 631,
        "name"     : "format_paint",
        "prevSize" : 32,
        "code"     : 60029,
        "ligatures": "format_paint",
        "tags"     : ["format_paint"]
    }, {
        "order"    : 2114,
        "id"       : 630,
        "name"     : "format_quote",
        "prevSize" : 32,
        "code"     : 60030,
        "ligatures": "format_quote",
        "tags"     : ["format_quote"]
    }, {
        "order"    : 2115,
        "id"       : 629,
        "name"     : "format_shapes",
        "prevSize" : 32,
        "code"     : 60031,
        "ligatures": "format_shapes",
        "tags"     : ["format_shapes"]
    }, {
        "order"    : 2116,
        "id"       : 628,
        "name"     : "format_size",
        "prevSize" : 32,
        "code"     : 60032,
        "ligatures": "format_size",
        "tags"     : ["format_size"]
    }, {
        "order"    : 2117,
        "id"       : 627,
        "name"     : "format_strikethrough",
        "prevSize" : 32,
        "code"     : 60033,
        "ligatures": "format_strikethrough",
        "tags"     : ["format_strikethrough"]
    }, {
        "order"    : 2118,
        "id"       : 626,
        "name"     : "format_textdirection_l_to_r",
        "prevSize" : 32,
        "code"     : 60034,
        "ligatures": "format_textdirection_l_to_r",
        "tags"     : ["format_textdirection_l_to_r"]
    }, {
        "order"    : 2119,
        "id"       : 625,
        "name"     : "format_textdirection_r_to_l",
        "prevSize" : 32,
        "code"     : 60035,
        "ligatures": "format_textdirection_r_to_l",
        "tags"     : ["format_textdirection_r_to_l"]
    }, {
        "order"    : 2120,
        "id"       : 624,
        "name"     : "format_underlined",
        "prevSize" : 32,
        "code"     : 60036,
        "ligatures": "format_underlined",
        "tags"     : ["format_underlined"]
    }, {
        "order"    : 2121,
        "id"       : 623,
        "name"     : "forum",
        "prevSize" : 32,
        "code"     : 60037,
        "ligatures": "forum",
        "tags"     : ["forum"]
    }, {
        "order"    : 2122,
        "id"       : 622,
        "name"     : "forward_5",
        "prevSize" : 32,
        "code"     : 60038,
        "ligatures": "forward_5",
        "tags"     : ["forward_5"]
    }, {
        "order"    : 2123,
        "id"       : 621,
        "name"     : "forward_10",
        "prevSize" : 32,
        "code"     : 60039,
        "ligatures": "forward_10",
        "tags"     : ["forward_10"]
    }, {
        "order"    : 2124,
        "id"       : 620,
        "name"     : "forward_30",
        "prevSize" : 32,
        "code"     : 60040,
        "ligatures": "forward_30",
        "tags"     : ["forward_30"]
    }, {
        "order"    : 2125,
        "id"       : 619,
        "name"     : "forward",
        "prevSize" : 32,
        "code"     : 60041,
        "ligatures": "forward",
        "tags"     : ["forward"]
    }, {
        "order"    : 2126,
        "id"       : 618,
        "name"     : "free_breakfast",
        "prevSize" : 32,
        "code"     : 60042,
        "ligatures": "free_breakfast",
        "tags"     : ["free_breakfast"]
    }, {
        "order"    : 2127,
        "id"       : 617,
        "name"     : "fullscreen_exit",
        "prevSize" : 32,
        "code"     : 60043,
        "ligatures": "fullscreen_exit",
        "tags"     : ["fullscreen_exit"]
    }, {
        "order"    : 2128,
        "id"       : 616,
        "name"     : "fullscreen",
        "prevSize" : 32,
        "code"     : 60044,
        "ligatures": "fullscreen",
        "tags"     : ["fullscreen"]
    }, {
        "order"    : 2129,
        "id"       : 615,
        "name"     : "functions",
        "prevSize" : 32,
        "code"     : 60045,
        "ligatures": "functions",
        "tags"     : ["functions"]
    }, {
        "order"    : 2130,
        "id"       : 614,
        "name"     : "g_translate",
        "prevSize" : 32,
        "code"     : 60046,
        "ligatures": "g_translate",
        "tags"     : ["g_translate"]
    }, {
        "order"    : 2131,
        "id"       : 613,
        "name"     : "gamepad",
        "prevSize" : 32,
        "code"     : 60047,
        "ligatures": "gamepad",
        "tags"     : ["gamepad"]
    }, {
        "order"    : 2132,
        "id"       : 612,
        "name"     : "games",
        "prevSize" : 32,
        "code"     : 60048,
        "ligatures": "games",
        "tags"     : ["games"]
    }, {
        "order"    : 2133,
        "id"       : 611,
        "name"     : "gavel",
        "prevSize" : 32,
        "code"     : 60049,
        "ligatures": "gavel",
        "tags"     : ["gavel"]
    }, {
        "order"    : 2134,
        "id"       : 610,
        "name"     : "gesture",
        "prevSize" : 32,
        "code"     : 60050,
        "ligatures": "gesture",
        "tags"     : ["gesture"]
    }, {
        "order"    : 2135,
        "id"       : 609,
        "name"     : "get_app",
        "prevSize" : 32,
        "code"     : 60051,
        "ligatures": "get_app",
        "tags"     : ["get_app"]
    }, {
        "order"    : 2136,
        "id"       : 608,
        "name"     : "gif",
        "prevSize" : 32,
        "code"     : 60052,
        "ligatures": "gif",
        "tags"     : ["gif"]
    }, {
        "order"    : 2137,
        "id"       : 607,
        "name"     : "golf_course",
        "prevSize" : 32,
        "code"     : 60053,
        "ligatures": "golf_course",
        "tags"     : ["golf_course"]
    }, {
        "order"    : 2138,
        "id"       : 606,
        "name"     : "gps_fixed",
        "prevSize" : 32,
        "code"     : 60054,
        "ligatures": "gps_fixed",
        "tags"     : ["gps_fixed"]
    }, {
        "order"    : 2139,
        "id"       : 605,
        "name"     : "gps_not_fixed",
        "prevSize" : 32,
        "code"     : 60055,
        "ligatures": "gps_not_fixed",
        "tags"     : ["gps_not_fixed"]
    }, {
        "order"    : 2140,
        "id"       : 604,
        "name"     : "gps_off",
        "prevSize" : 32,
        "code"     : 60056,
        "ligatures": "gps_off",
        "tags"     : ["gps_off"]
    }, {
        "order"    : 2141,
        "id"       : 603,
        "name"     : "grade",
        "prevSize" : 32,
        "code"     : 60057,
        "ligatures": "grade",
        "tags"     : ["grade"]
    }, {
        "order"    : 2142,
        "id"       : 602,
        "name"     : "gradient",
        "prevSize" : 32,
        "code"     : 60058,
        "ligatures": "gradient",
        "tags"     : ["gradient"]
    }, {
        "order"    : 2143,
        "id"       : 601,
        "name"     : "grain",
        "prevSize" : 32,
        "code"     : 60059,
        "ligatures": "grain",
        "tags"     : ["grain"]
    }, {
        "order"    : 2144,
        "id"       : 600,
        "name"     : "graphic_eq",
        "prevSize" : 32,
        "code"     : 60060,
        "ligatures": "graphic_eq",
        "tags"     : ["graphic_eq"]
    }, {
        "order"    : 2145,
        "id"       : 599,
        "name"     : "grid_off",
        "prevSize" : 32,
        "code"     : 60061,
        "ligatures": "grid_off",
        "tags"     : ["grid_off"]
    }, {
        "order"    : 2146,
        "id"       : 598,
        "name"     : "grid_on",
        "prevSize" : 32,
        "code"     : 60062,
        "ligatures": "grid_on",
        "tags"     : ["grid_on"]
    }, {
        "order"    : 2147,
        "id"       : 597,
        "name"     : "group_add",
        "prevSize" : 32,
        "code"     : 60063,
        "ligatures": "group_add",
        "tags"     : ["group_add"]
    }, {
        "order"    : 2148,
        "id"       : 596,
        "name"     : "group_work",
        "prevSize" : 32,
        "code"     : 60064,
        "ligatures": "group_work",
        "tags"     : ["group_work"]
    }, {
        "order"    : 2149,
        "id"       : 595,
        "name"     : "group",
        "prevSize" : 32,
        "code"     : 60065,
        "ligatures": "group",
        "tags"     : ["group"]
    }, {
        "order"    : 2150,
        "id"       : 594,
        "name"     : "hd",
        "prevSize" : 32,
        "code"     : 60066,
        "ligatures": "hd",
        "tags"     : ["hd"]
    }, {
        "order"    : 2151,
        "id"       : 593,
        "name"     : "hdr_off",
        "prevSize" : 32,
        "code"     : 60067,
        "ligatures": "hdr_off",
        "tags"     : ["hdr_off"]
    }, {
        "order"    : 2152,
        "id"       : 592,
        "name"     : "hdr_on",
        "prevSize" : 32,
        "code"     : 60068,
        "ligatures": "hdr_on",
        "tags"     : ["hdr_on"]
    }, {
        "order"    : 2153,
        "id"       : 591,
        "name"     : "hdr_strong",
        "prevSize" : 32,
        "code"     : 60069,
        "ligatures": "hdr_strong",
        "tags"     : ["hdr_strong"]
    }, {
        "order"    : 2154,
        "id"       : 590,
        "name"     : "hdr_weak",
        "prevSize" : 32,
        "code"     : 60070,
        "ligatures": "hdr_weak",
        "tags"     : ["hdr_weak"]
    }, {
        "order"    : 2155,
        "id"       : 589,
        "name"     : "headset_mic",
        "prevSize" : 32,
        "code"     : 60071,
        "ligatures": "headset_mic",
        "tags"     : ["headset_mic"]
    }, {
        "order"    : 2156,
        "id"       : 588,
        "name"     : "headset",
        "prevSize" : 32,
        "code"     : 60072,
        "ligatures": "headset",
        "tags"     : ["headset"]
    }, {
        "order"    : 2157,
        "id"       : 587,
        "name"     : "healing",
        "prevSize" : 32,
        "code"     : 60073,
        "ligatures": "healing",
        "tags"     : ["healing"]
    }, {
        "order"    : 2158,
        "id"       : 586,
        "name"     : "hearing",
        "prevSize" : 32,
        "code"     : 60074,
        "ligatures": "hearing",
        "tags"     : ["hearing"]
    }, {
        "order"    : 2159,
        "id"       : 585,
        "name"     : "help_outline",
        "prevSize" : 32,
        "code"     : 60075,
        "ligatures": "help_outline",
        "tags"     : ["help_outline"]
    }, {
        "order"    : 2160,
        "id"       : 584,
        "name"     : "help",
        "prevSize" : 32,
        "code"     : 60076,
        "ligatures": "help",
        "tags"     : ["help"]
    }, {
        "order"    : 2161,
        "id"       : 583,
        "name"     : "high_quality",
        "prevSize" : 32,
        "code"     : 60077,
        "ligatures": "high_quality",
        "tags"     : ["high_quality"]
    }, {
        "order"    : 2162,
        "id"       : 582,
        "name"     : "highlight_off",
        "prevSize" : 32,
        "code"     : 60078,
        "ligatures": "highlight_off",
        "tags"     : ["highlight_off"]
    }, {
        "order"    : 2163,
        "id"       : 581,
        "name"     : "highlight",
        "prevSize" : 32,
        "code"     : 60079,
        "ligatures": "highlight",
        "tags"     : ["highlight"]
    }, {
        "order"    : 2164,
        "id"       : 580,
        "name"     : "history",
        "prevSize" : 32,
        "code"     : 60080,
        "ligatures": "history",
        "tags"     : ["history"]
    }, {
        "order"    : 2165,
        "id"       : 579,
        "name"     : "home",
        "prevSize" : 32,
        "code"     : 60081,
        "ligatures": "home",
        "tags"     : ["home"]
    }, {
        "order"    : 2166,
        "id"       : 578,
        "name"     : "horizontal_split",
        "prevSize" : 32,
        "code"     : 60082,
        "ligatures": "horizontal_split",
        "tags"     : ["horizontal_split"]
    }, {
        "order"    : 2167,
        "id"       : 577,
        "name"     : "hot_tub",
        "prevSize" : 32,
        "code"     : 60083,
        "ligatures": "hot_tub",
        "tags"     : ["hot_tub"]
    }, {
        "order"    : 2168,
        "id"       : 576,
        "name"     : "hotel",
        "prevSize" : 32,
        "code"     : 60084,
        "ligatures": "hotel",
        "tags"     : ["hotel"]
    }, {
        "order"    : 2169,
        "id"       : 575,
        "name"     : "hourglass_empty",
        "prevSize" : 32,
        "code"     : 60085,
        "ligatures": "hourglass_empty",
        "tags"     : ["hourglass_empty"]
    }, {
        "order"    : 2170,
        "id"       : 574,
        "name"     : "hourglass_full",
        "prevSize" : 32,
        "code"     : 60086,
        "ligatures": "hourglass_full",
        "tags"     : ["hourglass_full"]
    }, {
        "order"    : 2171,
        "id"       : 573,
        "name"     : "how_to_reg",
        "prevSize" : 32,
        "code"     : 60087,
        "ligatures": "how_to_reg",
        "tags"     : ["how_to_reg"]
    }, {
        "order"    : 2172,
        "id"       : 572,
        "name"     : "how_to_vote",
        "prevSize" : 32,
        "code"     : 60088,
        "ligatures": "how_to_vote",
        "tags"     : ["how_to_vote"]
    }, {
        "order"    : 2173,
        "id"       : 571,
        "name"     : "http",
        "prevSize" : 32,
        "code"     : 60089,
        "ligatures": "http",
        "tags"     : ["http"]
    }, {
        "order"    : 2174,
        "id"       : 570,
        "name"     : "https",
        "prevSize" : 32,
        "code"     : 60090,
        "ligatures": "https",
        "tags"     : ["https"]
    }, {
        "order"    : 2175,
        "id"       : 569,
        "name"     : "image_aspect_ratio",
        "prevSize" : 32,
        "code"     : 60091,
        "ligatures": "image_aspect_ratio",
        "tags"     : ["image_aspect_ratio"]
    }, {
        "order"    : 2176,
        "id"       : 568,
        "name"     : "image_search",
        "prevSize" : 32,
        "code"     : 60092,
        "ligatures": "image_search",
        "tags"     : ["image_search"]
    }, {
        "order"    : 2177,
        "id"       : 567,
        "name"     : "image",
        "prevSize" : 32,
        "code"     : 60093,
        "ligatures": "image",
        "tags"     : ["image"]
    }, {
        "order"    : 2178,
        "id"       : 566,
        "name"     : "import_contacts",
        "prevSize" : 32,
        "code"     : 60094,
        "ligatures": "import_contacts",
        "tags"     : ["import_contacts"]
    }, {
        "order"    : 2179,
        "id"       : 565,
        "name"     : "import_export",
        "prevSize" : 32,
        "code"     : 60095,
        "ligatures": "import_export",
        "tags"     : ["import_export"]
    }, {
        "order"    : 2180,
        "id"       : 564,
        "name"     : "important_devices",
        "prevSize" : 32,
        "code"     : 60096,
        "ligatures": "important_devices",
        "tags"     : ["important_devices"]
    }, {
        "order"    : 2181,
        "id"       : 563,
        "name"     : "inbox",
        "prevSize" : 32,
        "code"     : 60097,
        "ligatures": "inbox",
        "tags"     : ["inbox"]
    }, {
        "order"    : 2182,
        "id"       : 562,
        "name"     : "indeterminate_check_box",
        "prevSize" : 32,
        "code"     : 60098,
        "ligatures": "indeterminate_check_box",
        "tags"     : ["indeterminate_check_box"]
    }, {
        "order"    : 2183,
        "id"       : 561,
        "name"     : "info",
        "prevSize" : 32,
        "code"     : 60099,
        "ligatures": "info",
        "tags"     : ["info"]
    }, {
        "order"    : 2184,
        "id"       : 560,
        "name"     : "input",
        "prevSize" : 32,
        "code"     : 60100,
        "ligatures": "input",
        "tags"     : ["input"]
    }, {
        "order"    : 2185,
        "id"       : 559,
        "name"     : "insert_chart_outlined",
        "prevSize" : 32,
        "code"     : 60101,
        "ligatures": "insert_chart_outlined",
        "tags"     : ["insert_chart_outlined"]
    }, {
        "order"    : 2186,
        "id"       : 558,
        "name"     : "insert_chart",
        "prevSize" : 32,
        "code"     : 60102,
        "ligatures": "insert_chart",
        "tags"     : ["insert_chart"]
    }, {
        "order"    : 2187,
        "id"       : 557,
        "name"     : "insert_comment",
        "prevSize" : 32,
        "code"     : 60103,
        "ligatures": "insert_comment",
        "tags"     : ["insert_comment"]
    }, {
        "order"    : 2188,
        "id"       : 556,
        "name"     : "insert_drive_file",
        "prevSize" : 32,
        "code"     : 60104,
        "ligatures": "insert_drive_file",
        "tags"     : ["insert_drive_file"]
    }, {
        "order"    : 2189,
        "id"       : 555,
        "name"     : "insert_emoticon",
        "prevSize" : 32,
        "code"     : 60105,
        "ligatures": "insert_emoticon",
        "tags"     : ["insert_emoticon"]
    }, {
        "order"    : 2190,
        "id"       : 554,
        "name"     : "insert_invitation",
        "prevSize" : 32,
        "code"     : 60106,
        "ligatures": "insert_invitation",
        "tags"     : ["insert_invitation"]
    }, {
        "order"    : 2191,
        "id"       : 553,
        "name"     : "insert_link",
        "prevSize" : 32,
        "code"     : 60107,
        "ligatures": "insert_link",
        "tags"     : ["insert_link"]
    }, {
        "order"    : 2192,
        "id"       : 552,
        "name"     : "insert_photo",
        "prevSize" : 32,
        "code"     : 60108,
        "ligatures": "insert_photo",
        "tags"     : ["insert_photo"]
    }, {
        "order"    : 2193,
        "id"       : 551,
        "name"     : "invert_colors_off",
        "prevSize" : 32,
        "code"     : 60109,
        "ligatures": "invert_colors_off",
        "tags"     : ["invert_colors_off"]
    }, {
        "order"    : 2194,
        "id"       : 550,
        "name"     : "invert_colors",
        "prevSize" : 32,
        "code"     : 60110,
        "ligatures": "invert_colors",
        "tags"     : ["invert_colors"]
    }, {
        "order"    : 2195,
        "id"       : 549,
        "name"     : "iso",
        "prevSize" : 32,
        "code"     : 60111,
        "ligatures": "iso",
        "tags"     : ["iso"]
    }, {
        "order"    : 2196,
        "id"       : 548,
        "name"     : "keyboard_arrow_down",
        "prevSize" : 32,
        "code"     : 60112,
        "ligatures": "keyboard_arrow_down",
        "tags"     : ["keyboard_arrow_down"]
    }, {
        "order"    : 2197,
        "id"       : 547,
        "name"     : "keyboard_arrow_left",
        "prevSize" : 32,
        "code"     : 60113,
        "ligatures": "keyboard_arrow_left",
        "tags"     : ["keyboard_arrow_left"]
    }, {
        "order"    : 2198,
        "id"       : 546,
        "name"     : "keyboard_arrow_right",
        "prevSize" : 32,
        "code"     : 60114,
        "ligatures": "keyboard_arrow_right",
        "tags"     : ["keyboard_arrow_right"]
    }, {
        "order"    : 2199,
        "id"       : 545,
        "name"     : "keyboard_arrow_up",
        "prevSize" : 32,
        "code"     : 60115,
        "ligatures": "keyboard_arrow_up",
        "tags"     : ["keyboard_arrow_up"]
    }, {
        "order"    : 2200,
        "id"       : 544,
        "name"     : "keyboard_backspace",
        "prevSize" : 32,
        "code"     : 60116,
        "ligatures": "keyboard_backspace",
        "tags"     : ["keyboard_backspace"]
    }, {
        "order"    : 2201,
        "id"       : 543,
        "name"     : "keyboard_capslock",
        "prevSize" : 32,
        "code"     : 60117,
        "ligatures": "keyboard_capslock",
        "tags"     : ["keyboard_capslock"]
    }, {
        "order"    : 2202,
        "id"       : 542,
        "name"     : "keyboard_hide",
        "prevSize" : 32,
        "code"     : 60118,
        "ligatures": "keyboard_hide",
        "tags"     : ["keyboard_hide"]
    }, {
        "order"    : 2203,
        "id"       : 541,
        "name"     : "keyboard_return",
        "prevSize" : 32,
        "code"     : 60119,
        "ligatures": "keyboard_return",
        "tags"     : ["keyboard_return"]
    }, {
        "order"    : 2204,
        "id"       : 540,
        "name"     : "keyboard_tab",
        "prevSize" : 32,
        "code"     : 60120,
        "ligatures": "keyboard_tab",
        "tags"     : ["keyboard_tab"]
    }, {
        "order"    : 2205,
        "id"       : 539,
        "name"     : "keyboard_voice",
        "prevSize" : 32,
        "code"     : 60121,
        "ligatures": "keyboard_voice",
        "tags"     : ["keyboard_voice"]
    }, {
        "order"    : 2206,
        "id"       : 538,
        "name"     : "keyboard",
        "prevSize" : 32,
        "code"     : 60122,
        "ligatures": "keyboard",
        "tags"     : ["keyboard"]
    }, {
        "order"    : 2207,
        "id"       : 537,
        "name"     : "kitchen",
        "prevSize" : 32,
        "code"     : 60123,
        "ligatures": "kitchen",
        "tags"     : ["kitchen"]
    }, {
        "order"    : 2208,
        "id"       : 536,
        "name"     : "label_important",
        "prevSize" : 32,
        "code"     : 60124,
        "ligatures": "label_important",
        "tags"     : ["label_important"]
    }, {
        "order"    : 2209,
        "id"       : 535,
        "name"     : "label_off",
        "prevSize" : 32,
        "code"     : 60125,
        "ligatures": "label_off",
        "tags"     : ["label_off"]
    }, {
        "order"    : 2210,
        "id"       : 534,
        "name"     : "label",
        "prevSize" : 32,
        "code"     : 60126,
        "ligatures": "label",
        "tags"     : ["label"]
    }, {
        "order"    : 2211,
        "id"       : 533,
        "name"     : "landscape",
        "prevSize" : 32,
        "code"     : 60127,
        "ligatures": "landscape",
        "tags"     : ["landscape"]
    }, {
        "order"    : 2212,
        "id"       : 532,
        "name"     : "language",
        "prevSize" : 32,
        "code"     : 60128,
        "ligatures": "language",
        "tags"     : ["language"]
    }, {
        "order"    : 2213,
        "id"       : 531,
        "name"     : "laptop_chromebook",
        "prevSize" : 32,
        "code"     : 60129,
        "ligatures": "laptop_chromebook",
        "tags"     : ["laptop_chromebook"]
    }, {
        "order"    : 2214,
        "id"       : 530,
        "name"     : "laptop_mac",
        "prevSize" : 32,
        "code"     : 60130,
        "ligatures": "laptop_mac",
        "tags"     : ["laptop_mac"]
    }, {
        "order"    : 2215,
        "id"       : 529,
        "name"     : "laptop_windows",
        "prevSize" : 32,
        "code"     : 60131,
        "ligatures": "laptop_windows",
        "tags"     : ["laptop_windows"]
    }, {
        "order"    : 2216,
        "id"       : 528,
        "name"     : "laptop",
        "prevSize" : 32,
        "code"     : 60132,
        "ligatures": "laptop",
        "tags"     : ["laptop"]
    }, {
        "order"    : 2217,
        "id"       : 527,
        "name"     : "last_page",
        "prevSize" : 32,
        "code"     : 60133,
        "ligatures": "last_page",
        "tags"     : ["last_page"]
    }, {
        "order"    : 2218,
        "id"       : 526,
        "name"     : "launch",
        "prevSize" : 32,
        "code"     : 60134,
        "ligatures": "launch",
        "tags"     : ["launch"]
    }, {
        "order"    : 2219,
        "id"       : 525,
        "name"     : "layers_clear",
        "prevSize" : 32,
        "code"     : 60135,
        "ligatures": "layers_clear",
        "tags"     : ["layers_clear"]
    }, {
        "order"    : 2220,
        "id"       : 524,
        "name"     : "layers",
        "prevSize" : 32,
        "code"     : 60136,
        "ligatures": "layers",
        "tags"     : ["layers"]
    }, {
        "order"    : 2221,
        "id"       : 523,
        "name"     : "leak_add",
        "prevSize" : 32,
        "code"     : 60137,
        "ligatures": "leak_add",
        "tags"     : ["leak_add"]
    }, {
        "order"    : 2222,
        "id"       : 522,
        "name"     : "leak_remove",
        "prevSize" : 32,
        "code"     : 60138,
        "ligatures": "leak_remove",
        "tags"     : ["leak_remove"]
    }, {
        "order"    : 2223,
        "id"       : 521,
        "name"     : "lens",
        "prevSize" : 32,
        "code"     : 60139,
        "ligatures": "lens",
        "tags"     : ["lens"]
    }, {
        "order"    : 2224,
        "id"       : 520,
        "name"     : "library_add",
        "prevSize" : 32,
        "code"     : 60140,
        "ligatures": "library_add",
        "tags"     : ["library_add"]
    }, {
        "order"    : 2225,
        "id"       : 519,
        "name"     : "library_books",
        "prevSize" : 32,
        "code"     : 60141,
        "ligatures": "library_books",
        "tags"     : ["library_books"]
    }, {
        "order"    : 2226,
        "id"       : 518,
        "name"     : "library_music",
        "prevSize" : 32,
        "code"     : 60142,
        "ligatures": "library_music",
        "tags"     : ["library_music"]
    }, {
        "order"    : 2227,
        "id"       : 517,
        "name"     : "line_style",
        "prevSize" : 32,
        "code"     : 60143,
        "ligatures": "line_style",
        "tags"     : ["line_style"]
    }, {
        "order"    : 2228,
        "id"       : 516,
        "name"     : "line_weight",
        "prevSize" : 32,
        "code"     : 60144,
        "ligatures": "line_weight",
        "tags"     : ["line_weight"]
    }, {
        "order"    : 2229,
        "id"       : 515,
        "name"     : "linear_scale",
        "prevSize" : 32,
        "code"     : 60145,
        "ligatures": "linear_scale",
        "tags"     : ["linear_scale"]
    }, {
        "order"    : 2230,
        "id"       : 514,
        "name"     : "link_off",
        "prevSize" : 32,
        "code"     : 60146,
        "ligatures": "link_off",
        "tags"     : ["link_off"]
    }, {
        "order"    : 2231,
        "id"       : 513,
        "name"     : "link",
        "prevSize" : 32,
        "code"     : 60147,
        "ligatures": "link",
        "tags"     : ["link"]
    }, {
        "order"    : 2232,
        "id"       : 512,
        "name"     : "linked_camera",
        "prevSize" : 32,
        "code"     : 60148,
        "ligatures": "linked_camera",
        "tags"     : ["linked_camera"]
    }, {
        "order"    : 2233,
        "id"       : 511,
        "name"     : "list_alt",
        "prevSize" : 32,
        "code"     : 60149,
        "ligatures": "list_alt",
        "tags"     : ["list_alt"]
    }, {
        "order"    : 2234,
        "id"       : 510,
        "name"     : "list",
        "prevSize" : 32,
        "code"     : 60150,
        "ligatures": "list",
        "tags"     : ["list"]
    }, {
        "order"    : 2235,
        "id"       : 509,
        "name"     : "live_help",
        "prevSize" : 32,
        "code"     : 60151,
        "ligatures": "live_help",
        "tags"     : ["live_help"]
    }, {
        "order"    : 2236,
        "id"       : 508,
        "name"     : "live_tv",
        "prevSize" : 32,
        "code"     : 60152,
        "ligatures": "live_tv",
        "tags"     : ["live_tv"]
    }, {
        "order"    : 2237,
        "id"       : 507,
        "name"     : "local_activity",
        "prevSize" : 32,
        "code"     : 60153,
        "ligatures": "local_activity",
        "tags"     : ["local_activity"]
    }, {
        "order"    : 2238,
        "id"       : 506,
        "name"     : "local_airport",
        "prevSize" : 32,
        "code"     : 60154,
        "ligatures": "local_airport",
        "tags"     : ["local_airport"]
    }, {
        "order"    : 2239,
        "id"       : 505,
        "name"     : "local_atm",
        "prevSize" : 32,
        "code"     : 60155,
        "ligatures": "local_atm",
        "tags"     : ["local_atm"]
    }, {
        "order"    : 2240,
        "id"       : 504,
        "name"     : "local_bar",
        "prevSize" : 32,
        "code"     : 60156,
        "ligatures": "local_bar",
        "tags"     : ["local_bar"]
    }, {
        "order"    : 2241,
        "id"       : 503,
        "name"     : "local_cafe",
        "prevSize" : 32,
        "code"     : 60157,
        "ligatures": "local_cafe",
        "tags"     : ["local_cafe"]
    }, {
        "order"    : 2242,
        "id"       : 502,
        "name"     : "local_car_wash",
        "prevSize" : 32,
        "code"     : 60158,
        "ligatures": "local_car_wash",
        "tags"     : ["local_car_wash"]
    }, {
        "order"    : 2243,
        "id"       : 501,
        "name"     : "local_convenience_store",
        "prevSize" : 32,
        "code"     : 60159,
        "ligatures": "local_convenience_store",
        "tags"     : ["local_convenience_store"]
    }, {
        "order"    : 2244,
        "id"       : 500,
        "name"     : "local_dining",
        "prevSize" : 32,
        "code"     : 60160,
        "ligatures": "local_dining",
        "tags"     : ["local_dining"]
    }, {
        "order"    : 2245,
        "id"       : 499,
        "name"     : "local_drink",
        "prevSize" : 32,
        "code"     : 60161,
        "ligatures": "local_drink",
        "tags"     : ["local_drink"]
    }, {
        "order"    : 2246,
        "id"       : 498,
        "name"     : "local_florist",
        "prevSize" : 32,
        "code"     : 60162,
        "ligatures": "local_florist",
        "tags"     : ["local_florist"]
    }, {
        "order"    : 2247,
        "id"       : 497,
        "name"     : "local_gas_station",
        "prevSize" : 32,
        "code"     : 60163,
        "ligatures": "local_gas_station",
        "tags"     : ["local_gas_station"]
    }, {
        "order"    : 2248,
        "id"       : 496,
        "name"     : "local_grocery_store",
        "prevSize" : 32,
        "code"     : 60164,
        "ligatures": "local_grocery_store",
        "tags"     : ["local_grocery_store"]
    }, {
        "order"    : 2249,
        "id"       : 495,
        "name"     : "local_hospital",
        "prevSize" : 32,
        "code"     : 60165,
        "ligatures": "local_hospital",
        "tags"     : ["local_hospital"]
    }, {
        "order"    : 2250,
        "id"       : 494,
        "name"     : "local_hotel",
        "prevSize" : 32,
        "code"     : 60166,
        "ligatures": "local_hotel",
        "tags"     : ["local_hotel"]
    }, {
        "order"    : 2251,
        "id"       : 493,
        "name"     : "local_laundry_service",
        "prevSize" : 32,
        "code"     : 60167,
        "ligatures": "local_laundry_service",
        "tags"     : ["local_laundry_service"]
    }, {
        "order"    : 2252,
        "id"       : 492,
        "name"     : "local_library",
        "prevSize" : 32,
        "code"     : 60168,
        "ligatures": "local_library",
        "tags"     : ["local_library"]
    }, {
        "order"    : 2253,
        "id"       : 491,
        "name"     : "local_mall",
        "prevSize" : 32,
        "code"     : 60169,
        "ligatures": "local_mall",
        "tags"     : ["local_mall"]
    }, {
        "order"    : 2254,
        "id"       : 490,
        "name"     : "local_movies",
        "prevSize" : 32,
        "code"     : 60170,
        "ligatures": "local_movies",
        "tags"     : ["local_movies"]
    }, {
        "order"    : 2255,
        "id"       : 489,
        "name"     : "local_offer",
        "prevSize" : 32,
        "code"     : 60171,
        "ligatures": "local_offer",
        "tags"     : ["local_offer"]
    }, {
        "order"    : 2256,
        "id"       : 488,
        "name"     : "local_parking",
        "prevSize" : 32,
        "code"     : 60172,
        "ligatures": "local_parking",
        "tags"     : ["local_parking"]
    }, {
        "order"    : 2257,
        "id"       : 487,
        "name"     : "local_pharmacy",
        "prevSize" : 32,
        "code"     : 60173,
        "ligatures": "local_pharmacy",
        "tags"     : ["local_pharmacy"]
    }, {
        "order"    : 2258,
        "id"       : 486,
        "name"     : "local_phone",
        "prevSize" : 32,
        "code"     : 60174,
        "ligatures": "local_phone",
        "tags"     : ["local_phone"]
    }, {
        "order"    : 2259,
        "id"       : 485,
        "name"     : "local_pizza",
        "prevSize" : 32,
        "code"     : 60175,
        "ligatures": "local_pizza",
        "tags"     : ["local_pizza"]
    }, {
        "order"    : 2260,
        "id"       : 484,
        "name"     : "local_play",
        "prevSize" : 32,
        "code"     : 60176,
        "ligatures": "local_play",
        "tags"     : ["local_play"]
    }, {
        "order"    : 2261,
        "id"       : 483,
        "name"     : "local_post_office",
        "prevSize" : 32,
        "code"     : 60177,
        "ligatures": "local_post_office",
        "tags"     : ["local_post_office"]
    }, {
        "order"    : 2262,
        "id"       : 482,
        "name"     : "local_printshop",
        "prevSize" : 32,
        "code"     : 60178,
        "ligatures": "local_printshop",
        "tags"     : ["local_printshop"]
    }, {
        "order"    : 2263,
        "id"       : 481,
        "name"     : "local_see",
        "prevSize" : 32,
        "code"     : 60179,
        "ligatures": "local_see",
        "tags"     : ["local_see"]
    }, {
        "order"    : 2264,
        "id"       : 480,
        "name"     : "local_shipping",
        "prevSize" : 32,
        "code"     : 60180,
        "ligatures": "local_shipping",
        "tags"     : ["local_shipping"]
    }, {
        "order"    : 2265,
        "id"       : 479,
        "name"     : "local_taxi",
        "prevSize" : 32,
        "code"     : 60181,
        "ligatures": "local_taxi",
        "tags"     : ["local_taxi"]
    }, {
        "order"    : 2266,
        "id"       : 478,
        "name"     : "location_city",
        "prevSize" : 32,
        "code"     : 60182,
        "ligatures": "location_city",
        "tags"     : ["location_city"]
    }, {
        "order"    : 2267,
        "id"       : 477,
        "name"     : "location_disabled",
        "prevSize" : 32,
        "code"     : 60183,
        "ligatures": "location_disabled",
        "tags"     : ["location_disabled"]
    }, {
        "order"    : 2268,
        "id"       : 476,
        "name"     : "location_off",
        "prevSize" : 32,
        "code"     : 60184,
        "ligatures": "location_off",
        "tags"     : ["location_off"]
    }, {
        "order"    : 2269,
        "id"       : 475,
        "name"     : "location_on",
        "prevSize" : 32,
        "code"     : 60185,
        "ligatures": "location_on",
        "tags"     : ["location_on"]
    }, {
        "order"    : 2270,
        "id"       : 474,
        "name"     : "location_searching",
        "prevSize" : 32,
        "code"     : 60186,
        "ligatures": "location_searching",
        "tags"     : ["location_searching"]
    }, {
        "order"    : 2271,
        "id"       : 473,
        "name"     : "lock_open",
        "prevSize" : 32,
        "code"     : 60187,
        "ligatures": "lock_open",
        "tags"     : ["lock_open"]
    }, {
        "order"    : 2272,
        "id"       : 472,
        "name"     : "lock",
        "prevSize" : 32,
        "code"     : 60188,
        "ligatures": "lock",
        "tags"     : ["lock"]
    }, {
        "order"    : 2273,
        "id"       : 471,
        "name"     : "looks_3",
        "prevSize" : 32,
        "code"     : 60189,
        "ligatures": "looks_3",
        "tags"     : ["looks_3"]
    }, {
        "order"    : 2274,
        "id"       : 470,
        "name"     : "looks_4",
        "prevSize" : 32,
        "code"     : 60190,
        "ligatures": "looks_4",
        "tags"     : ["looks_4"]
    }, {
        "order"    : 2275,
        "id"       : 469,
        "name"     : "looks_5",
        "prevSize" : 32,
        "code"     : 60191,
        "ligatures": "looks_5",
        "tags"     : ["looks_5"]
    }, {
        "order"    : 2276,
        "id"       : 468,
        "name"     : "looks_6",
        "prevSize" : 32,
        "code"     : 60192,
        "ligatures": "looks_6",
        "tags"     : ["looks_6"]
    }, {
        "order"    : 2277,
        "id"       : 467,
        "name"     : "looks_one",
        "prevSize" : 32,
        "code"     : 60193,
        "ligatures": "looks_one",
        "tags"     : ["looks_one"]
    }, {
        "order"    : 2278,
        "id"       : 466,
        "name"     : "looks_two",
        "prevSize" : 32,
        "code"     : 60194,
        "ligatures": "looks_two",
        "tags"     : ["looks_two"]
    }, {
        "order"    : 2279,
        "id"       : 465,
        "name"     : "looks",
        "prevSize" : 32,
        "code"     : 60195,
        "ligatures": "looks",
        "tags"     : ["looks"]
    }, {
        "order"    : 2280,
        "id"       : 464,
        "name"     : "loop",
        "prevSize" : 32,
        "code"     : 60196,
        "ligatures": "loop",
        "tags"     : ["loop"]
    }, {
        "order"    : 2281,
        "id"       : 463,
        "name"     : "loupe",
        "prevSize" : 32,
        "code"     : 60197,
        "ligatures": "loupe",
        "tags"     : ["loupe"]
    }, {
        "order"    : 2282,
        "id"       : 462,
        "name"     : "low_priority",
        "prevSize" : 32,
        "code"     : 60198,
        "ligatures": "low_priority",
        "tags"     : ["low_priority"]
    }, {
        "order"    : 2283,
        "id"       : 461,
        "name"     : "loyalty",
        "prevSize" : 32,
        "code"     : 60199,
        "ligatures": "loyalty",
        "tags"     : ["loyalty"]
    }, {
        "order"    : 2284,
        "id"       : 460,
        "name"     : "mail_outline",
        "prevSize" : 32,
        "code"     : 60200,
        "ligatures": "mail_outline",
        "tags"     : ["mail_outline"]
    }, {
        "order"    : 2285,
        "id"       : 459,
        "name"     : "mail",
        "prevSize" : 32,
        "code"     : 60201,
        "ligatures": "mail",
        "tags"     : ["mail"]
    }, {
        "order"    : 2286,
        "id"       : 458,
        "name"     : "map",
        "prevSize" : 32,
        "code"     : 60202,
        "ligatures": "map",
        "tags"     : ["map"]
    }, {
        "order"    : 2287,
        "id"       : 457,
        "name"     : "markunread_mailbox",
        "prevSize" : 32,
        "code"     : 60203,
        "ligatures": "markunread_mailbox",
        "tags"     : ["markunread_mailbox"]
    }, {
        "order"    : 2288,
        "id"       : 456,
        "name"     : "markunread",
        "prevSize" : 32,
        "code"     : 60204,
        "ligatures": "markunread",
        "tags"     : ["markunread"]
    }, {
        "order"    : 2289,
        "id"       : 455,
        "name"     : "maximize",
        "prevSize" : 32,
        "code"     : 60205,
        "ligatures": "maximize",
        "tags"     : ["maximize"]
    }, {
        "order"    : 2290,
        "id"       : 454,
        "name"     : "meeting_room",
        "prevSize" : 32,
        "code"     : 60206,
        "ligatures": "meeting_room",
        "tags"     : ["meeting_room"]
    }, {
        "order"    : 2291,
        "id"       : 453,
        "name"     : "memory",
        "prevSize" : 32,
        "code"     : 60207,
        "ligatures": "memory",
        "tags"     : ["memory"]
    }, {
        "order"    : 2292,
        "id"       : 452,
        "name"     : "menu",
        "prevSize" : 32,
        "code"     : 60208,
        "ligatures": "menu",
        "tags"     : ["menu"]
    }, {
        "order"    : 2293,
        "id"       : 451,
        "name"     : "merge_type",
        "prevSize" : 32,
        "code"     : 60209,
        "ligatures": "merge_type",
        "tags"     : ["merge_type"]
    }, {
        "order"    : 2294,
        "id"       : 450,
        "name"     : "message",
        "prevSize" : 32,
        "code"     : 60210,
        "ligatures": "message",
        "tags"     : ["message"]
    }, {
        "order"    : 2295,
        "id"       : 449,
        "name"     : "mic_none",
        "prevSize" : 32,
        "code"     : 60211,
        "ligatures": "mic_none",
        "tags"     : ["mic_none"]
    }, {
        "order"    : 2296,
        "id"       : 448,
        "name"     : "mic_off",
        "prevSize" : 32,
        "code"     : 60212,
        "ligatures": "mic_off",
        "tags"     : ["mic_off"]
    }, {
        "order"    : 2297,
        "id"       : 447,
        "name"     : "mic",
        "prevSize" : 32,
        "code"     : 60213,
        "ligatures": "mic",
        "tags"     : ["mic"]
    }, {
        "order"    : 2298,
        "id"       : 446,
        "name"     : "minimize",
        "prevSize" : 32,
        "code"     : 60214,
        "ligatures": "minimize",
        "tags"     : ["minimize"]
    }, {
        "order"    : 2299,
        "id"       : 445,
        "name"     : "missed_video_call",
        "prevSize" : 32,
        "code"     : 60215,
        "ligatures": "missed_video_call",
        "tags"     : ["missed_video_call"]
    }, {
        "order"    : 2300,
        "id"       : 444,
        "name"     : "mms",
        "prevSize" : 32,
        "code"     : 60216,
        "ligatures": "mms",
        "tags"     : ["mms"]
    }, {
        "order"    : 2301,
        "id"       : 443,
        "name"     : "mobile_friendly",
        "prevSize" : 32,
        "code"     : 60217,
        "ligatures": "mobile_friendly",
        "tags"     : ["mobile_friendly"]
    }, {
        "order"    : 2302,
        "id"       : 442,
        "name"     : "mobile_off",
        "prevSize" : 32,
        "code"     : 60218,
        "ligatures": "mobile_off",
        "tags"     : ["mobile_off"]
    }, {
        "order"    : 2303,
        "id"       : 441,
        "name"     : "mobile_screen_share",
        "prevSize" : 32,
        "code"     : 60219,
        "ligatures": "mobile_screen_share",
        "tags"     : ["mobile_screen_share"]
    }, {
        "order"    : 2304,
        "id"       : 440,
        "name"     : "mode_comment",
        "prevSize" : 32,
        "code"     : 60220,
        "ligatures": "mode_comment",
        "tags"     : ["mode_comment"]
    }, {
        "order"    : 2305,
        "id"       : 439,
        "name"     : "monetization_on",
        "prevSize" : 32,
        "code"     : 60221,
        "ligatures": "monetization_on",
        "tags"     : ["monetization_on"]
    }, {
        "order"    : 2306,
        "id"       : 438,
        "name"     : "money_off",
        "prevSize" : 32,
        "code"     : 60222,
        "ligatures": "money_off",
        "tags"     : ["money_off"]
    }, {
        "order"    : 2307,
        "id"       : 437,
        "name"     : "money",
        "prevSize" : 32,
        "code"     : 60223,
        "ligatures": "money",
        "tags"     : ["money"]
    }, {
        "order"    : 2308,
        "id"       : 436,
        "name"     : "monochrome_photos",
        "prevSize" : 32,
        "code"     : 60224,
        "ligatures": "monochrome_photos",
        "tags"     : ["monochrome_photos"]
    }, {
        "order"    : 2309,
        "id"       : 435,
        "name"     : "mood_bad",
        "prevSize" : 32,
        "code"     : 60225,
        "ligatures": "mood_bad",
        "tags"     : ["mood_bad"]
    }, {
        "order"    : 2310,
        "id"       : 434,
        "name"     : "mood",
        "prevSize" : 32,
        "code"     : 60226,
        "ligatures": "mood",
        "tags"     : ["mood"]
    }, {
        "order"    : 2311,
        "id"       : 433,
        "name"     : "more_horiz",
        "prevSize" : 32,
        "code"     : 60227,
        "ligatures": "more_horiz",
        "tags"     : ["more_horiz"]
    }, {
        "order"    : 2312,
        "id"       : 432,
        "name"     : "more_vert",
        "prevSize" : 32,
        "code"     : 60228,
        "ligatures": "more_vert",
        "tags"     : ["more_vert"]
    }, {
        "order"    : 2313,
        "id"       : 431,
        "name"     : "more",
        "prevSize" : 32,
        "code"     : 60229,
        "ligatures": "more",
        "tags"     : ["more"]
    }, {
        "order"    : 2314,
        "id"       : 430,
        "name"     : "motorcycle",
        "prevSize" : 32,
        "code"     : 60230,
        "ligatures": "motorcycle",
        "tags"     : ["motorcycle"]
    }, {
        "order"    : 2315,
        "id"       : 429,
        "name"     : "mouse",
        "prevSize" : 32,
        "code"     : 60231,
        "ligatures": "mouse",
        "tags"     : ["mouse"]
    }, {
        "order"    : 2316,
        "id"       : 428,
        "name"     : "move_to_inbox",
        "prevSize" : 32,
        "code"     : 60232,
        "ligatures": "move_to_inbox",
        "tags"     : ["move_to_inbox"]
    }, {
        "order"    : 2317,
        "id"       : 427,
        "name"     : "movie_creation",
        "prevSize" : 32,
        "code"     : 60233,
        "ligatures": "movie_creation",
        "tags"     : ["movie_creation"]
    }, {
        "order"    : 2318,
        "id"       : 426,
        "name"     : "movie_filter",
        "prevSize" : 32,
        "code"     : 60234,
        "ligatures": "movie_filter",
        "tags"     : ["movie_filter"]
    }, {
        "order"    : 2319,
        "id"       : 425,
        "name"     : "movie",
        "prevSize" : 32,
        "code"     : 60235,
        "ligatures": "movie",
        "tags"     : ["movie"]
    }, {
        "order"    : 2320,
        "id"       : 424,
        "name"     : "multiline_chart",
        "prevSize" : 32,
        "code"     : 60236,
        "ligatures": "multiline_chart",
        "tags"     : ["multiline_chart"]
    }, {
        "order"    : 2321,
        "id"       : 423,
        "name"     : "music_note",
        "prevSize" : 32,
        "code"     : 60237,
        "ligatures": "music_note",
        "tags"     : ["music_note"]
    }, {
        "order"    : 2322,
        "id"       : 422,
        "name"     : "music_off",
        "prevSize" : 32,
        "code"     : 60238,
        "ligatures": "music_off",
        "tags"     : ["music_off"]
    }, {
        "order"    : 2323,
        "id"       : 421,
        "name"     : "music_video",
        "prevSize" : 32,
        "code"     : 60239,
        "ligatures": "music_video",
        "tags"     : ["music_video"]
    }, {
        "order"    : 2324,
        "id"       : 420,
        "name"     : "my_location",
        "prevSize" : 32,
        "code"     : 60240,
        "ligatures": "my_location",
        "tags"     : ["my_location"]
    }, {
        "order"    : 2325,
        "id"       : 419,
        "name"     : "nature_people",
        "prevSize" : 32,
        "code"     : 60241,
        "ligatures": "nature_people",
        "tags"     : ["nature_people"]
    }, {
        "order"    : 2326,
        "id"       : 418,
        "name"     : "nature",
        "prevSize" : 32,
        "code"     : 60242,
        "ligatures": "nature",
        "tags"     : ["nature"]
    }, {
        "order"    : 2327,
        "id"       : 417,
        "name"     : "navigate_before",
        "prevSize" : 32,
        "code"     : 60243,
        "ligatures": "navigate_before",
        "tags"     : ["navigate_before"]
    }, {
        "order"    : 2328,
        "id"       : 416,
        "name"     : "navigate_next",
        "prevSize" : 32,
        "code"     : 60244,
        "ligatures": "navigate_next",
        "tags"     : ["navigate_next"]
    }, {
        "order"    : 2329,
        "id"       : 415,
        "name"     : "navigation",
        "prevSize" : 32,
        "code"     : 60245,
        "ligatures": "navigation",
        "tags"     : ["navigation"]
    }, {
        "order"    : 2330,
        "id"       : 414,
        "name"     : "near_me",
        "prevSize" : 32,
        "code"     : 60246,
        "ligatures": "near_me",
        "tags"     : ["near_me"]
    }, {
        "order"    : 2331,
        "id"       : 413,
        "name"     : "network_check",
        "prevSize" : 32,
        "code"     : 60247,
        "ligatures": "network_check",
        "tags"     : ["network_check"]
    }, {
        "order"    : 2332,
        "id"       : 412,
        "name"     : "network_locked",
        "prevSize" : 32,
        "code"     : 60248,
        "ligatures": "network_locked",
        "tags"     : ["network_locked"]
    }, {
        "order"    : 2333,
        "id"       : 411,
        "name"     : "new_releases",
        "prevSize" : 32,
        "code"     : 60249,
        "ligatures": "new_releases",
        "tags"     : ["new_releases"]
    }, {
        "order"    : 2334,
        "id"       : 410,
        "name"     : "next_week",
        "prevSize" : 32,
        "code"     : 60250,
        "ligatures": "next_week",
        "tags"     : ["next_week"]
    }, {
        "order"    : 2335,
        "id"       : 409,
        "name"     : "nfc",
        "prevSize" : 32,
        "code"     : 60251,
        "ligatures": "nfc",
        "tags"     : ["nfc"]
    }, {
        "order"    : 2336,
        "id"       : 408,
        "name"     : "no_encryption",
        "prevSize" : 32,
        "code"     : 60252,
        "ligatures": "no_encryption",
        "tags"     : ["no_encryption"]
    }, {
        "order"    : 2337,
        "id"       : 407,
        "name"     : "no_meeting_room",
        "prevSize" : 32,
        "code"     : 60253,
        "ligatures": "no_meeting_room",
        "tags"     : ["no_meeting_room"]
    }, {
        "order"    : 2338,
        "id"       : 406,
        "name"     : "no_sim",
        "prevSize" : 32,
        "code"     : 60254,
        "ligatures": "no_sim",
        "tags"     : ["no_sim"]
    }, {
        "order"    : 2339,
        "id"       : 405,
        "name"     : "not_interested",
        "prevSize" : 32,
        "code"     : 60255,
        "ligatures": "not_interested",
        "tags"     : ["not_interested"]
    }, {
        "order"    : 2340,
        "id"       : 404,
        "name"     : "not_listed_location",
        "prevSize" : 32,
        "code"     : 60256,
        "ligatures": "not_listed_location",
        "tags"     : ["not_listed_location"]
    }, {
        "order"    : 2341,
        "id"       : 403,
        "name"     : "note_add",
        "prevSize" : 32,
        "code"     : 60257,
        "ligatures": "note_add",
        "tags"     : ["note_add"]
    }, {
        "order"    : 2342,
        "id"       : 402,
        "name"     : "note",
        "prevSize" : 32,
        "code"     : 60258,
        "ligatures": "note",
        "tags"     : ["note"]
    }, {
        "order"    : 2343,
        "id"       : 401,
        "name"     : "notes",
        "prevSize" : 32,
        "code"     : 60259,
        "ligatures": "notes",
        "tags"     : ["notes"]
    }, {
        "order"    : 2344,
        "id"       : 400,
        "name"     : "notification_important",
        "prevSize" : 32,
        "code"     : 60260,
        "ligatures": "notification_important",
        "tags"     : ["notification_important"]
    }, {
        "order"    : 2345,
        "id"       : 399,
        "name"     : "notifications_active",
        "prevSize" : 32,
        "code"     : 60261,
        "ligatures": "notifications_active",
        "tags"     : ["notifications_active"]
    }, {
        "order"    : 2346,
        "id"       : 398,
        "name"     : "notifications_none",
        "prevSize" : 32,
        "code"     : 60262,
        "ligatures": "notifications_none",
        "tags"     : ["notifications_none"]
    }, {
        "order"    : 2347,
        "id"       : 397,
        "name"     : "notifications_off",
        "prevSize" : 32,
        "code"     : 60263,
        "ligatures": "notifications_off",
        "tags"     : ["notifications_off"]
    }, {
        "order"    : 2348,
        "id"       : 396,
        "name"     : "notifications_paused",
        "prevSize" : 32,
        "code"     : 60264,
        "ligatures": "notifications_paused",
        "tags"     : ["notifications_paused"]
    }, {
        "order"    : 2349,
        "id"       : 395,
        "name"     : "notifications",
        "prevSize" : 32,
        "code"     : 60265,
        "ligatures": "notifications",
        "tags"     : ["notifications"]
    }, {
        "order"    : 2350,
        "id"       : 394,
        "name"     : "offline_bolt",
        "prevSize" : 32,
        "code"     : 60266,
        "ligatures": "offline_bolt",
        "tags"     : ["offline_bolt"]
    }, {
        "order"    : 2351,
        "id"       : 393,
        "name"     : "offline_pin",
        "prevSize" : 32,
        "code"     : 60267,
        "ligatures": "offline_pin",
        "tags"     : ["offline_pin"]
    }, {
        "order"    : 2352,
        "id"       : 392,
        "name"     : "ondemand_video",
        "prevSize" : 32,
        "code"     : 60268,
        "ligatures": "ondemand_video",
        "tags"     : ["ondemand_video"]
    }, {
        "order"    : 2353,
        "id"       : 391,
        "name"     : "opacity",
        "prevSize" : 32,
        "code"     : 60269,
        "ligatures": "opacity",
        "tags"     : ["opacity"]
    }, {
        "order"    : 2354,
        "id"       : 390,
        "name"     : "open_in_browser",
        "prevSize" : 32,
        "code"     : 60270,
        "ligatures": "open_in_browser",
        "tags"     : ["open_in_browser"]
    }, {
        "order"    : 2355,
        "id"       : 389,
        "name"     : "open_in_new",
        "prevSize" : 32,
        "code"     : 60271,
        "ligatures": "open_in_new",
        "tags"     : ["open_in_new"]
    }, {
        "order"    : 2356,
        "id"       : 388,
        "name"     : "open_with",
        "prevSize" : 32,
        "code"     : 60272,
        "ligatures": "open_with",
        "tags"     : ["open_with"]
    }, {
        "order"    : 2357,
        "id"       : 387,
        "name"     : "outlined_flag",
        "prevSize" : 32,
        "code"     : 60273,
        "ligatures": "outlined_flag",
        "tags"     : ["outlined_flag"]
    }, {
        "order"    : 2358,
        "id"       : 386,
        "name"     : "pages",
        "prevSize" : 32,
        "code"     : 60274,
        "ligatures": "pages",
        "tags"     : ["pages"]
    }, {
        "order"    : 2359,
        "id"       : 385,
        "name"     : "pageview",
        "prevSize" : 32,
        "code"     : 60275,
        "ligatures": "pageview",
        "tags"     : ["pageview"]
    }, {
        "order"    : 2360,
        "id"       : 384,
        "name"     : "palette",
        "prevSize" : 32,
        "code"     : 60276,
        "ligatures": "palette",
        "tags"     : ["palette"]
    }, {
        "order"    : 2361,
        "id"       : 383,
        "name"     : "pan_tool",
        "prevSize" : 32,
        "code"     : 60277,
        "ligatures": "pan_tool",
        "tags"     : ["pan_tool"]
    }, {
        "order"    : 2362,
        "id"       : 382,
        "name"     : "panorama_fish_eye",
        "prevSize" : 32,
        "code"     : 60278,
        "ligatures": "panorama_fish_eye",
        "tags"     : ["panorama_fish_eye"]
    }, {
        "order"    : 2363,
        "id"       : 381,
        "name"     : "panorama_horizontal",
        "prevSize" : 32,
        "code"     : 60279,
        "ligatures": "panorama_horizontal",
        "tags"     : ["panorama_horizontal"]
    }, {
        "order"    : 2364,
        "id"       : 380,
        "name"     : "panorama_vertical",
        "prevSize" : 32,
        "code"     : 60280,
        "ligatures": "panorama_vertical",
        "tags"     : ["panorama_vertical"]
    }, {
        "order"    : 2365,
        "id"       : 379,
        "name"     : "panorama_wide_angle",
        "prevSize" : 32,
        "code"     : 60281,
        "ligatures": "panorama_wide_angle",
        "tags"     : ["panorama_wide_angle"]
    }, {
        "order"    : 2366,
        "id"       : 378,
        "name"     : "panorama",
        "prevSize" : 32,
        "code"     : 60282,
        "ligatures": "panorama",
        "tags"     : ["panorama"]
    }, {
        "order"    : 2367,
        "id"       : 377,
        "name"     : "party_mode",
        "prevSize" : 32,
        "code"     : 60283,
        "ligatures": "party_mode",
        "tags"     : ["party_mode"]
    }, {
        "order"    : 2368,
        "id"       : 376,
        "name"     : "pause_circle_filled",
        "prevSize" : 32,
        "code"     : 60284,
        "ligatures": "pause_circle_filled",
        "tags"     : ["pause_circle_filled"]
    }, {
        "order"    : 2369,
        "id"       : 375,
        "name"     : "pause_circle_outline",
        "prevSize" : 32,
        "code"     : 60285,
        "ligatures": "pause_circle_outline",
        "tags"     : ["pause_circle_outline"]
    }, {
        "order"    : 2370,
        "id"       : 374,
        "name"     : "pause_presentation",
        "prevSize" : 32,
        "code"     : 60286,
        "ligatures": "pause_presentation",
        "tags"     : ["pause_presentation"]
    }, {
        "order"    : 2371,
        "id"       : 373,
        "name"     : "pause",
        "prevSize" : 32,
        "code"     : 60287,
        "ligatures": "pause",
        "tags"     : ["pause"]
    }, {
        "order"    : 2372,
        "id"       : 372,
        "name"     : "payment",
        "prevSize" : 32,
        "code"     : 60288,
        "ligatures": "payment",
        "tags"     : ["payment"]
    }, {
        "order"    : 2373,
        "id"       : 371,
        "name"     : "people_outline",
        "prevSize" : 32,
        "code"     : 60289,
        "ligatures": "people_outline",
        "tags"     : ["people_outline"]
    }, {
        "order"    : 2374,
        "id"       : 370,
        "name"     : "people",
        "prevSize" : 32,
        "code"     : 60290,
        "ligatures": "people",
        "tags"     : ["people"]
    }, {
        "order"    : 2375,
        "id"       : 369,
        "name"     : "perm_camera_mic",
        "prevSize" : 32,
        "code"     : 60291,
        "ligatures": "perm_camera_mic",
        "tags"     : ["perm_camera_mic"]
    }, {
        "order"    : 2376,
        "id"       : 368,
        "name"     : "perm_contact_calendar",
        "prevSize" : 32,
        "code"     : 60292,
        "ligatures": "perm_contact_calendar",
        "tags"     : ["perm_contact_calendar"]
    }, {
        "order"    : 2377,
        "id"       : 367,
        "name"     : "perm_data_setting",
        "prevSize" : 32,
        "code"     : 60293,
        "ligatures": "perm_data_setting",
        "tags"     : ["perm_data_setting"]
    }, {
        "order"    : 2378,
        "id"       : 366,
        "name"     : "perm_device_information",
        "prevSize" : 32,
        "code"     : 60294,
        "ligatures": "perm_device_information",
        "tags"     : ["perm_device_information"]
    }, {
        "order"    : 2379,
        "id"       : 365,
        "name"     : "perm_identity",
        "prevSize" : 32,
        "code"     : 60295,
        "ligatures": "perm_identity",
        "tags"     : ["perm_identity"]
    }, {
        "order"    : 2380,
        "id"       : 364,
        "name"     : "perm_media",
        "prevSize" : 32,
        "code"     : 60296,
        "ligatures": "perm_media",
        "tags"     : ["perm_media"]
    }, {
        "order"    : 2381,
        "id"       : 363,
        "name"     : "perm_phone_msg",
        "prevSize" : 32,
        "code"     : 60297,
        "ligatures": "perm_phone_msg",
        "tags"     : ["perm_phone_msg"]
    }, {
        "order"    : 2382,
        "id"       : 362,
        "name"     : "perm_scan_wifi",
        "prevSize" : 32,
        "code"     : 60298,
        "ligatures": "perm_scan_wifi",
        "tags"     : ["perm_scan_wifi"]
    }, {
        "order"    : 2383,
        "id"       : 361,
        "name"     : "person_add_disabled",
        "prevSize" : 32,
        "code"     : 60299,
        "ligatures": "person_add_disabled",
        "tags"     : ["person_add_disabled"]
    }, {
        "order"    : 2384,
        "id"       : 360,
        "name"     : "person_add",
        "prevSize" : 32,
        "code"     : 60300,
        "ligatures": "person_add",
        "tags"     : ["person_add"]
    }, {
        "order"    : 2385,
        "id"       : 359,
        "name"     : "person_outline",
        "prevSize" : 32,
        "code"     : 60301,
        "ligatures": "person_outline",
        "tags"     : ["person_outline"]
    }, {
        "order"    : 2386,
        "id"       : 358,
        "name"     : "person_pin_circle",
        "prevSize" : 32,
        "code"     : 60302,
        "ligatures": "person_pin_circle",
        "tags"     : ["person_pin_circle"]
    }, {
        "order"    : 2387,
        "id"       : 357,
        "name"     : "person_pin",
        "prevSize" : 32,
        "code"     : 60303,
        "ligatures": "person_pin",
        "tags"     : ["person_pin"]
    }, {
        "order"    : 2388,
        "id"       : 356,
        "name"     : "person",
        "prevSize" : 32,
        "code"     : 60304,
        "ligatures": "person",
        "tags"     : ["person"]
    }, {
        "order"    : 2389,
        "id"       : 355,
        "name"     : "personal_video",
        "prevSize" : 32,
        "code"     : 60305,
        "ligatures": "personal_video",
        "tags"     : ["personal_video"]
    }, {
        "order"    : 2390,
        "id"       : 354,
        "name"     : "pets",
        "prevSize" : 32,
        "code"     : 60306,
        "ligatures": "pets",
        "tags"     : ["pets"]
    }, {
        "order"    : 2391,
        "id"       : 353,
        "name"     : "phone_android",
        "prevSize" : 32,
        "code"     : 60307,
        "ligatures": "phone_android",
        "tags"     : ["phone_android"]
    }, {
        "order"    : 2392,
        "id"       : 352,
        "name"     : "phone_bluetooth_speaker",
        "prevSize" : 32,
        "code"     : 60308,
        "ligatures": "phone_bluetooth_speaker",
        "tags"     : ["phone_bluetooth_speaker"]
    }, {
        "order"    : 2393,
        "id"       : 351,
        "name"     : "phone_callback",
        "prevSize" : 32,
        "code"     : 60309,
        "ligatures": "phone_callback",
        "tags"     : ["phone_callback"]
    }, {
        "order"    : 2394,
        "id"       : 350,
        "name"     : "phone_forwarded",
        "prevSize" : 32,
        "code"     : 60310,
        "ligatures": "phone_forwarded",
        "tags"     : ["phone_forwarded"]
    }, {
        "order"    : 2395,
        "id"       : 349,
        "name"     : "phone_in_talk",
        "prevSize" : 32,
        "code"     : 60311,
        "ligatures": "phone_in_talk",
        "tags"     : ["phone_in_talk"]
    }, {
        "order"    : 2396,
        "id"       : 348,
        "name"     : "phone_iphone",
        "prevSize" : 32,
        "code"     : 60312,
        "ligatures": "phone_iphone",
        "tags"     : ["phone_iphone"]
    }, {
        "order"    : 2397,
        "id"       : 347,
        "name"     : "phone_locked",
        "prevSize" : 32,
        "code"     : 60313,
        "ligatures": "phone_locked",
        "tags"     : ["phone_locked"]
    }, {
        "order"    : 2398,
        "id"       : 346,
        "name"     : "phone_missed",
        "prevSize" : 32,
        "code"     : 60314,
        "ligatures": "phone_missed",
        "tags"     : ["phone_missed"]
    }, {
        "order"    : 2399,
        "id"       : 345,
        "name"     : "phone_paused",
        "prevSize" : 32,
        "code"     : 60315,
        "ligatures": "phone_paused",
        "tags"     : ["phone_paused"]
    }, {
        "order"    : 2400,
        "id"       : 344,
        "name"     : "phone",
        "prevSize" : 32,
        "code"     : 60316,
        "ligatures": "phone",
        "tags"     : ["phone"]
    }, {
        "order"    : 2401,
        "id"       : 343,
        "name"     : "phonelink_erase",
        "prevSize" : 32,
        "code"     : 60317,
        "ligatures": "phonelink_erase",
        "tags"     : ["phonelink_erase"]
    }, {
        "order"    : 2402,
        "id"       : 342,
        "name"     : "phonelink_lock",
        "prevSize" : 32,
        "code"     : 60318,
        "ligatures": "phonelink_lock",
        "tags"     : ["phonelink_lock"]
    }, {
        "order"    : 2403,
        "id"       : 341,
        "name"     : "phonelink_off",
        "prevSize" : 32,
        "code"     : 60319,
        "ligatures": "phonelink_off",
        "tags"     : ["phonelink_off"]
    }, {
        "order"    : 2404,
        "id"       : 340,
        "name"     : "phonelink_ring",
        "prevSize" : 32,
        "code"     : 60320,
        "ligatures": "phonelink_ring",
        "tags"     : ["phonelink_ring"]
    }, {
        "order"    : 2405,
        "id"       : 339,
        "name"     : "phonelink_setup",
        "prevSize" : 32,
        "code"     : 60321,
        "ligatures": "phonelink_setup",
        "tags"     : ["phonelink_setup"]
    }, {
        "order"    : 2406,
        "id"       : 338,
        "name"     : "phonelink",
        "prevSize" : 32,
        "code"     : 60322,
        "ligatures": "phonelink",
        "tags"     : ["phonelink"]
    }, {
        "order"    : 2407,
        "id"       : 337,
        "name"     : "photo_album",
        "prevSize" : 32,
        "code"     : 60323,
        "ligatures": "photo_album",
        "tags"     : ["photo_album"]
    }, {
        "order"    : 2408,
        "id"       : 336,
        "name"     : "photo_camera",
        "prevSize" : 32,
        "code"     : 60324,
        "ligatures": "photo_camera",
        "tags"     : ["photo_camera"]
    }, {
        "order"    : 2409,
        "id"       : 335,
        "name"     : "photo_filter",
        "prevSize" : 32,
        "code"     : 60325,
        "ligatures": "photo_filter",
        "tags"     : ["photo_filter"]
    }, {
        "order"    : 2410,
        "id"       : 334,
        "name"     : "photo_library",
        "prevSize" : 32,
        "code"     : 60326,
        "ligatures": "photo_library",
        "tags"     : ["photo_library"]
    }, {
        "order"    : 2411,
        "id"       : 333,
        "name"     : "photo_size_select_actual",
        "prevSize" : 32,
        "code"     : 60327,
        "ligatures": "photo_size_select_actual",
        "tags"     : ["photo_size_select_actual"]
    }, {
        "order"    : 2412,
        "id"       : 332,
        "name"     : "photo_size_select_large",
        "prevSize" : 32,
        "code"     : 60328,
        "ligatures": "photo_size_select_large",
        "tags"     : ["photo_size_select_large"]
    }, {
        "order"    : 2413,
        "id"       : 331,
        "name"     : "photo_size_select_small",
        "prevSize" : 32,
        "code"     : 60329,
        "ligatures": "photo_size_select_small",
        "tags"     : ["photo_size_select_small"]
    }, {
        "order"    : 2414,
        "id"       : 330,
        "name"     : "photo",
        "prevSize" : 32,
        "code"     : 60330,
        "ligatures": "photo",
        "tags"     : ["photo"]
    }, {
        "order"    : 2415,
        "id"       : 329,
        "name"     : "picture_as_pdf",
        "prevSize" : 32,
        "code"     : 60331,
        "ligatures": "picture_as_pdf",
        "tags"     : ["picture_as_pdf"]
    }, {
        "order"    : 2416,
        "id"       : 328,
        "name"     : "picture_in_picture_alt",
        "prevSize" : 32,
        "code"     : 60332,
        "ligatures": "picture_in_picture_alt",
        "tags"     : ["picture_in_picture_alt"]
    }, {
        "order"    : 2417,
        "id"       : 327,
        "name"     : "picture_in_picture",
        "prevSize" : 32,
        "code"     : 60333,
        "ligatures": "picture_in_picture",
        "tags"     : ["picture_in_picture"]
    }, {
        "order"    : 2418,
        "id"       : 326,
        "name"     : "pie_chart",
        "prevSize" : 32,
        "code"     : 60334,
        "ligatures": "pie_chart",
        "tags"     : ["pie_chart"]
    }, {
        "order"    : 2419,
        "id"       : 325,
        "name"     : "pin_drop",
        "prevSize" : 32,
        "code"     : 60335,
        "ligatures": "pin_drop",
        "tags"     : ["pin_drop"]
    }, {
        "order"    : 2420,
        "id"       : 324,
        "name"     : "place",
        "prevSize" : 32,
        "code"     : 60336,
        "ligatures": "place",
        "tags"     : ["place"]
    }, {
        "order"    : 2421,
        "id"       : 323,
        "name"     : "play_arrow",
        "prevSize" : 32,
        "code"     : 60337,
        "ligatures": "play_arrow",
        "tags"     : ["play_arrow"]
    }, {
        "order"    : 2422,
        "id"       : 322,
        "name"     : "play_circle_filled_white",
        "prevSize" : 32,
        "code"     : 60338,
        "ligatures": "play_circle_filled_white",
        "tags"     : ["play_circle_filled_white"]
    }, {
        "order"    : 2423,
        "id"       : 321,
        "name"     : "play_circle_filled",
        "prevSize" : 32,
        "code"     : 60339,
        "ligatures": "play_circle_filled",
        "tags"     : ["play_circle_filled"]
    }, {
        "order"    : 2424,
        "id"       : 320,
        "name"     : "play_circle_outline",
        "prevSize" : 32,
        "code"     : 60340,
        "ligatures": "play_circle_outline",
        "tags"     : ["play_circle_outline"]
    }, {
        "order"    : 2425,
        "id"       : 319,
        "name"     : "play_for_work",
        "prevSize" : 32,
        "code"     : 60341,
        "ligatures": "play_for_work",
        "tags"     : ["play_for_work"]
    }, {
        "order"    : 2426,
        "id"       : 318,
        "name"     : "playlist_add_check",
        "prevSize" : 32,
        "code"     : 60342,
        "ligatures": "playlist_add_check",
        "tags"     : ["playlist_add_check"]
    }, {
        "order"    : 2427,
        "id"       : 317,
        "name"     : "playlist_add",
        "prevSize" : 32,
        "code"     : 60343,
        "ligatures": "playlist_add",
        "tags"     : ["playlist_add"]
    }, {
        "order"    : 2428,
        "id"       : 316,
        "name"     : "playlist_play",
        "prevSize" : 32,
        "code"     : 60344,
        "ligatures": "playlist_play",
        "tags"     : ["playlist_play"]
    }, {
        "order"    : 2429,
        "id"       : 315,
        "name"     : "plus_one",
        "prevSize" : 32,
        "code"     : 60345,
        "ligatures": "plus_one",
        "tags"     : ["plus_one"]
    }, {
        "order"    : 2430,
        "id"       : 314,
        "name"     : "poll",
        "prevSize" : 32,
        "code"     : 60346,
        "ligatures": "poll",
        "tags"     : ["poll"]
    }, {
        "order"    : 2431,
        "id"       : 313,
        "name"     : "polymer",
        "prevSize" : 32,
        "code"     : 60347,
        "ligatures": "polymer",
        "tags"     : ["polymer"]
    }, {
        "order"    : 2432,
        "id"       : 312,
        "name"     : "pool",
        "prevSize" : 32,
        "code"     : 60348,
        "ligatures": "pool",
        "tags"     : ["pool"]
    }, {
        "order"    : 2433,
        "id"       : 311,
        "name"     : "portable_wifi_off",
        "prevSize" : 32,
        "code"     : 60349,
        "ligatures": "portable_wifi_off",
        "tags"     : ["portable_wifi_off"]
    }, {
        "order"    : 2434,
        "id"       : 310,
        "name"     : "portrait",
        "prevSize" : 32,
        "code"     : 60350,
        "ligatures": "portrait",
        "tags"     : ["portrait"]
    }, {
        "order"    : 2435,
        "id"       : 309,
        "name"     : "power_input",
        "prevSize" : 32,
        "code"     : 60351,
        "ligatures": "power_input",
        "tags"     : ["power_input"]
    }, {
        "order"    : 2436,
        "id"       : 308,
        "name"     : "power_off",
        "prevSize" : 32,
        "code"     : 60352,
        "ligatures": "power_off",
        "tags"     : ["power_off"]
    }, {
        "order"    : 2437,
        "id"       : 307,
        "name"     : "power_settings_new",
        "prevSize" : 32,
        "code"     : 60353,
        "ligatures": "power_settings_new",
        "tags"     : ["power_settings_new"]
    }, {
        "order"    : 2438,
        "id"       : 306,
        "name"     : "power",
        "prevSize" : 32,
        "code"     : 60354,
        "ligatures": "power",
        "tags"     : ["power"]
    }, {
        "order"    : 2439,
        "id"       : 305,
        "name"     : "pregnant_woman",
        "prevSize" : 32,
        "code"     : 60355,
        "ligatures": "pregnant_woman",
        "tags"     : ["pregnant_woman"]
    }, {
        "order"    : 2440,
        "id"       : 304,
        "name"     : "present_to_all",
        "prevSize" : 32,
        "code"     : 60356,
        "ligatures": "present_to_all",
        "tags"     : ["present_to_all"]
    }, {
        "order"    : 2441,
        "id"       : 303,
        "name"     : "print_disabled",
        "prevSize" : 32,
        "code"     : 60357,
        "ligatures": "print_disabled",
        "tags"     : ["print_disabled"]
    }, {
        "order"    : 2442,
        "id"       : 302,
        "name"     : "print",
        "prevSize" : 32,
        "code"     : 60358,
        "ligatures": "print",
        "tags"     : ["print"]
    }, {
        "order"    : 2443,
        "id"       : 301,
        "name"     : "priority_high",
        "prevSize" : 32,
        "code"     : 60359,
        "ligatures": "priority_high",
        "tags"     : ["priority_high"]
    }, {
        "order"    : 2444,
        "id"       : 300,
        "name"     : "public",
        "prevSize" : 32,
        "code"     : 60360,
        "ligatures": "public",
        "tags"     : ["public"]
    }, {
        "order"    : 2445,
        "id"       : 299,
        "name"     : "publish",
        "prevSize" : 32,
        "code"     : 60361,
        "ligatures": "publish",
        "tags"     : ["publish"]
    }, {
        "order"    : 2446,
        "id"       : 298,
        "name"     : "query_builder",
        "prevSize" : 32,
        "code"     : 60362,
        "ligatures": "query_builder",
        "tags"     : ["query_builder"]
    }, {
        "order"    : 2447,
        "id"       : 297,
        "name"     : "question_answer",
        "prevSize" : 32,
        "code"     : 60363,
        "ligatures": "question_answer",
        "tags"     : ["question_answer"]
    }, {
        "order"    : 2448,
        "id"       : 296,
        "name"     : "queue_music",
        "prevSize" : 32,
        "code"     : 60364,
        "ligatures": "queue_music",
        "tags"     : ["queue_music"]
    }, {
        "order"    : 2449,
        "id"       : 295,
        "name"     : "queue_play_next",
        "prevSize" : 32,
        "code"     : 60365,
        "ligatures": "queue_play_next",
        "tags"     : ["queue_play_next"]
    }, {
        "order"    : 2450,
        "id"       : 294,
        "name"     : "queue",
        "prevSize" : 32,
        "code"     : 60366,
        "ligatures": "queue",
        "tags"     : ["queue"]
    }, {
        "order"    : 2451,
        "id"       : 293,
        "name"     : "radio_button_checked",
        "prevSize" : 32,
        "code"     : 60367,
        "ligatures": "radio_button_checked",
        "tags"     : ["radio_button_checked"]
    }, {
        "order"    : 2452,
        "id"       : 292,
        "name"     : "radio_button_unchecked",
        "prevSize" : 32,
        "code"     : 60368,
        "ligatures": "radio_button_unchecked",
        "tags"     : ["radio_button_unchecked"]
    }, {
        "order"    : 2453,
        "id"       : 291,
        "name"     : "radio",
        "prevSize" : 32,
        "code"     : 60369,
        "ligatures": "radio",
        "tags"     : ["radio"]
    }, {
        "order"    : 2454,
        "id"       : 290,
        "name"     : "rate_review",
        "prevSize" : 32,
        "code"     : 60370,
        "ligatures": "rate_review",
        "tags"     : ["rate_review"]
    }, {
        "order"    : 2455,
        "id"       : 289,
        "name"     : "receipt",
        "prevSize" : 32,
        "code"     : 60371,
        "ligatures": "receipt",
        "tags"     : ["receipt"]
    }, {
        "order"    : 2456,
        "id"       : 288,
        "name"     : "recent_actors",
        "prevSize" : 32,
        "code"     : 60372,
        "ligatures": "recent_actors",
        "tags"     : ["recent_actors"]
    }, {
        "order"    : 2457,
        "id"       : 287,
        "name"     : "record_voice_over",
        "prevSize" : 32,
        "code"     : 60373,
        "ligatures": "record_voice_over",
        "tags"     : ["record_voice_over"]
    }, {
        "order"    : 2458,
        "id"       : 286,
        "name"     : "redeem",
        "prevSize" : 32,
        "code"     : 60374,
        "ligatures": "redeem",
        "tags"     : ["redeem"]
    }, {
        "order"    : 2459,
        "id"       : 285,
        "name"     : "redo",
        "prevSize" : 32,
        "code"     : 60375,
        "ligatures": "redo",
        "tags"     : ["redo"]
    }, {
        "order"    : 2460,
        "id"       : 284,
        "name"     : "refresh",
        "prevSize" : 32,
        "code"     : 60376,
        "ligatures": "refresh",
        "tags"     : ["refresh"]
    }, {
        "order"    : 2461,
        "id"       : 283,
        "name"     : "remove_circle_outline",
        "prevSize" : 32,
        "code"     : 60377,
        "ligatures": "remove_circle_outline",
        "tags"     : ["remove_circle_outline"]
    }, {
        "order"    : 2462,
        "id"       : 282,
        "name"     : "remove_circle",
        "prevSize" : 32,
        "code"     : 60378,
        "ligatures": "remove_circle",
        "tags"     : ["remove_circle"]
    }, {
        "order"    : 2463,
        "id"       : 281,
        "name"     : "remove_from_queue",
        "prevSize" : 32,
        "code"     : 60379,
        "ligatures": "remove_from_queue",
        "tags"     : ["remove_from_queue"]
    }, {
        "order"    : 2464,
        "id"       : 280,
        "name"     : "remove_red_eye",
        "prevSize" : 32,
        "code"     : 60380,
        "ligatures": "remove_red_eye",
        "tags"     : ["remove_red_eye"]
    }, {
        "order"    : 2465,
        "id"       : 279,
        "name"     : "remove_shopping_cart",
        "prevSize" : 32,
        "code"     : 60381,
        "ligatures": "remove_shopping_cart",
        "tags"     : ["remove_shopping_cart"]
    }, {
        "order"    : 2466,
        "id"       : 278,
        "name"     : "remove",
        "prevSize" : 32,
        "code"     : 60382,
        "ligatures": "remove",
        "tags"     : ["remove"]
    }, {
        "order"    : 2467,
        "id"       : 277,
        "name"     : "reorder",
        "prevSize" : 32,
        "code"     : 60383,
        "ligatures": "reorder",
        "tags"     : ["reorder"]
    }, {
        "order"    : 2468,
        "id"       : 276,
        "name"     : "repeat_one",
        "prevSize" : 32,
        "code"     : 60384,
        "ligatures": "repeat_one",
        "tags"     : ["repeat_one"]
    }, {
        "order"    : 2469,
        "id"       : 275,
        "name"     : "repeat",
        "prevSize" : 32,
        "code"     : 60385,
        "ligatures": "repeat",
        "tags"     : ["repeat"]
    }, {
        "order"    : 2470,
        "id"       : 274,
        "name"     : "replay_5",
        "prevSize" : 32,
        "code"     : 60386,
        "ligatures": "replay_5",
        "tags"     : ["replay_5"]
    }, {
        "order"    : 2471,
        "id"       : 273,
        "name"     : "replay_10",
        "prevSize" : 32,
        "code"     : 60387,
        "ligatures": "replay_10",
        "tags"     : ["replay_10"]
    }, {
        "order"    : 2472,
        "id"       : 272,
        "name"     : "replay_30",
        "prevSize" : 32,
        "code"     : 60388,
        "ligatures": "replay_30",
        "tags"     : ["replay_30"]
    }, {
        "order"    : 2473,
        "id"       : 271,
        "name"     : "replay",
        "prevSize" : 32,
        "code"     : 60389,
        "ligatures": "replay",
        "tags"     : ["replay"]
    }, {
        "order"    : 2474,
        "id"       : 270,
        "name"     : "reply_all",
        "prevSize" : 32,
        "code"     : 60390,
        "ligatures": "reply_all",
        "tags"     : ["reply_all"]
    }, {
        "order"    : 2475,
        "id"       : 269,
        "name"     : "reply",
        "prevSize" : 32,
        "code"     : 60391,
        "ligatures": "reply",
        "tags"     : ["reply"]
    }, {
        "order"    : 2476,
        "id"       : 268,
        "name"     : "report_off",
        "prevSize" : 32,
        "code"     : 60392,
        "ligatures": "report_off",
        "tags"     : ["report_off"]
    }, {
        "order"    : 2477,
        "id"       : 267,
        "name"     : "report_problem",
        "prevSize" : 32,
        "code"     : 60393,
        "ligatures": "report_problem",
        "tags"     : ["report_problem"]
    }, {
        "order"    : 2478,
        "id"       : 266,
        "name"     : "report",
        "prevSize" : 32,
        "code"     : 60394,
        "ligatures": "report",
        "tags"     : ["report"]
    }, {
        "order"    : 2479,
        "id"       : 265,
        "name"     : "restaurant_menu",
        "prevSize" : 32,
        "code"     : 60395,
        "ligatures": "restaurant_menu",
        "tags"     : ["restaurant_menu"]
    }, {
        "order"    : 2480,
        "id"       : 264,
        "name"     : "restaurant",
        "prevSize" : 32,
        "code"     : 60396,
        "ligatures": "restaurant",
        "tags"     : ["restaurant"]
    }, {
        "order"    : 2481,
        "id"       : 263,
        "name"     : "restore_from_trash",
        "prevSize" : 32,
        "code"     : 60397,
        "ligatures": "restore_from_trash",
        "tags"     : ["restore_from_trash"]
    }, {
        "order"    : 2482,
        "id"       : 262,
        "name"     : "restore_page",
        "prevSize" : 32,
        "code"     : 60398,
        "ligatures": "restore_page",
        "tags"     : ["restore_page"]
    }, {
        "order"    : 2483,
        "id"       : 261,
        "name"     : "restore",
        "prevSize" : 32,
        "code"     : 60399,
        "ligatures": "restore",
        "tags"     : ["restore"]
    }, {
        "order"    : 2484,
        "id"       : 260,
        "name"     : "ring_volume",
        "prevSize" : 32,
        "code"     : 60400,
        "ligatures": "ring_volume",
        "tags"     : ["ring_volume"]
    }, {
        "order"    : 2485,
        "id"       : 259,
        "name"     : "room_service",
        "prevSize" : 32,
        "code"     : 60401,
        "ligatures": "room_service",
        "tags"     : ["room_service"]
    }, {
        "order"    : 2486,
        "id"       : 258,
        "name"     : "room",
        "prevSize" : 32,
        "code"     : 60402,
        "ligatures": "room",
        "tags"     : ["room"]
    }, {
        "order"    : 2487,
        "id"       : 257,
        "name"     : "rotate_90_degrees_ccw",
        "prevSize" : 32,
        "code"     : 60403,
        "ligatures": "rotate_90_degrees_ccw",
        "tags"     : ["rotate_90_degrees_ccw"]
    }, {
        "order"    : 2488,
        "id"       : 256,
        "name"     : "rotate_left",
        "prevSize" : 32,
        "code"     : 60404,
        "ligatures": "rotate_left",
        "tags"     : ["rotate_left"]
    }, {
        "order"    : 2489,
        "id"       : 255,
        "name"     : "rotate_right",
        "prevSize" : 32,
        "code"     : 60405,
        "ligatures": "rotate_right",
        "tags"     : ["rotate_right"]
    }, {
        "order"    : 2490,
        "id"       : 254,
        "name"     : "rounded_corner",
        "prevSize" : 32,
        "code"     : 60406,
        "ligatures": "rounded_corner",
        "tags"     : ["rounded_corner"]
    }, {
        "order"    : 2491,
        "id"       : 253,
        "name"     : "router",
        "prevSize" : 32,
        "code"     : 60407,
        "ligatures": "router",
        "tags"     : ["router"]
    }, {
        "order"    : 2492,
        "id"       : 252,
        "name"     : "rowing",
        "prevSize" : 32,
        "code"     : 60408,
        "ligatures": "rowing",
        "tags"     : ["rowing"]
    }, {
        "order"    : 2493,
        "id"       : 251,
        "name"     : "rss_feed",
        "prevSize" : 32,
        "code"     : 60409,
        "ligatures": "rss_feed",
        "tags"     : ["rss_feed"]
    }, {
        "order"    : 2494,
        "id"       : 250,
        "name"     : "rv_hookup",
        "prevSize" : 32,
        "code"     : 60410,
        "ligatures": "rv_hookup",
        "tags"     : ["rv_hookup"]
    }, {
        "order"    : 2495,
        "id"       : 249,
        "name"     : "satellite",
        "prevSize" : 32,
        "code"     : 60411,
        "ligatures": "satellite",
        "tags"     : ["satellite"]
    }, {
        "order"    : 2496,
        "id"       : 248,
        "name"     : "save_alt",
        "prevSize" : 32,
        "code"     : 60412,
        "ligatures": "save_alt",
        "tags"     : ["save_alt"]
    }, {
        "order"    : 2497,
        "id"       : 247,
        "name"     : "save",
        "prevSize" : 32,
        "code"     : 60413,
        "ligatures": "save",
        "tags"     : ["save"]
    }, {
        "order"    : 2498,
        "id"       : 246,
        "name"     : "scanner",
        "prevSize" : 32,
        "code"     : 60414,
        "ligatures": "scanner",
        "tags"     : ["scanner"]
    }, {
        "order"    : 2499,
        "id"       : 245,
        "name"     : "scatter_plot",
        "prevSize" : 32,
        "code"     : 60415,
        "ligatures": "scatter_plot",
        "tags"     : ["scatter_plot"]
    }, {
        "order"    : 2500,
        "id"       : 244,
        "name"     : "schedule",
        "prevSize" : 32,
        "code"     : 60416,
        "ligatures": "schedule",
        "tags"     : ["schedule"]
    }, {
        "order"    : 2501,
        "id"       : 243,
        "name"     : "school",
        "prevSize" : 32,
        "code"     : 60417,
        "ligatures": "school",
        "tags"     : ["school"]
    }, {
        "order"    : 2502,
        "id"       : 242,
        "name"     : "score",
        "prevSize" : 32,
        "code"     : 60418,
        "ligatures": "score",
        "tags"     : ["score"]
    }, {
        "order"    : 2503,
        "id"       : 241,
        "name"     : "screen_lock_landscape",
        "prevSize" : 32,
        "code"     : 60419,
        "ligatures": "screen_lock_landscape",
        "tags"     : ["screen_lock_landscape"]
    }, {
        "order"    : 2504,
        "id"       : 240,
        "name"     : "screen_lock_portrait",
        "prevSize" : 32,
        "code"     : 60420,
        "ligatures": "screen_lock_portrait",
        "tags"     : ["screen_lock_portrait"]
    }, {
        "order"    : 2505,
        "id"       : 239,
        "name"     : "screen_lock_rotation",
        "prevSize" : 32,
        "code"     : 60421,
        "ligatures": "screen_lock_rotation",
        "tags"     : ["screen_lock_rotation"]
    }, {
        "order"    : 2506,
        "id"       : 238,
        "name"     : "screen_rotation",
        "prevSize" : 32,
        "code"     : 60422,
        "ligatures": "screen_rotation",
        "tags"     : ["screen_rotation"]
    }, {
        "order"    : 2507,
        "id"       : 237,
        "name"     : "screen_share",
        "prevSize" : 32,
        "code"     : 60423,
        "ligatures": "screen_share",
        "tags"     : ["screen_share"]
    }, {
        "order"    : 2508,
        "id"       : 236,
        "name"     : "sd_card",
        "prevSize" : 32,
        "code"     : 60424,
        "ligatures": "sd_card",
        "tags"     : ["sd_card"]
    }, {
        "order"    : 2509,
        "id"       : 235,
        "name"     : "sd_storage",
        "prevSize" : 32,
        "code"     : 60425,
        "ligatures": "sd_storage",
        "tags"     : ["sd_storage"]
    }, {
        "order"    : 2510,
        "id"       : 234,
        "name"     : "search",
        "prevSize" : 32,
        "code"     : 60426,
        "ligatures": "search",
        "tags"     : ["search"]
    }, {
        "order"    : 2511,
        "id"       : 233,
        "name"     : "security",
        "prevSize" : 32,
        "code"     : 60427,
        "ligatures": "security",
        "tags"     : ["security"]
    }, {
        "order"    : 2512,
        "id"       : 232,
        "name"     : "select_all",
        "prevSize" : 32,
        "code"     : 60428,
        "ligatures": "select_all",
        "tags"     : ["select_all"]
    }, {
        "order"    : 2513,
        "id"       : 231,
        "name"     : "send",
        "prevSize" : 32,
        "code"     : 60429,
        "ligatures": "send",
        "tags"     : ["send"]
    }, {
        "order"    : 2514,
        "id"       : 230,
        "name"     : "sentiment_dissatisfied",
        "prevSize" : 32,
        "code"     : 60430,
        "ligatures": "sentiment_dissatisfied",
        "tags"     : ["sentiment_dissatisfied"]
    }, {
        "order"    : 2515,
        "id"       : 229,
        "name"     : "sentiment_satisfied_alt",
        "prevSize" : 32,
        "code"     : 60431,
        "ligatures": "sentiment_satisfied_alt",
        "tags"     : ["sentiment_satisfied_alt"]
    }, {
        "order"    : 2516,
        "id"       : 228,
        "name"     : "sentiment_satisfied",
        "prevSize" : 32,
        "code"     : 60432,
        "ligatures": "sentiment_satisfied",
        "tags"     : ["sentiment_satisfied"]
    }, {
        "order"    : 2517,
        "id"       : 227,
        "name"     : "sentiment_very_dissatisfied",
        "prevSize" : 32,
        "code"     : 60433,
        "ligatures": "sentiment_very_dissatisfied",
        "tags"     : ["sentiment_very_dissatisfied"]
    }, {
        "order"    : 2518,
        "id"       : 226,
        "name"     : "sentiment_very_satisfied",
        "prevSize" : 32,
        "code"     : 60434,
        "ligatures": "sentiment_very_satisfied",
        "tags"     : ["sentiment_very_satisfied"]
    }, {
        "order"    : 2519,
        "id"       : 225,
        "name"     : "settings_applications",
        "prevSize" : 32,
        "code"     : 60435,
        "ligatures": "settings_applications",
        "tags"     : ["settings_applications"]
    }, {
        "order"    : 2520,
        "id"       : 224,
        "name"     : "settings_backup_restore",
        "prevSize" : 32,
        "code"     : 60436,
        "ligatures": "settings_backup_restore",
        "tags"     : ["settings_backup_restore"]
    }, {
        "order"    : 2521,
        "id"       : 223,
        "name"     : "settings_bluetooth",
        "prevSize" : 32,
        "code"     : 60437,
        "ligatures": "settings_bluetooth",
        "tags"     : ["settings_bluetooth"]
    }, {
        "order"    : 2522,
        "id"       : 222,
        "name"     : "settings_brightness",
        "prevSize" : 32,
        "code"     : 60438,
        "ligatures": "settings_brightness",
        "tags"     : ["settings_brightness"]
    }, {
        "order"    : 2523,
        "id"       : 221,
        "name"     : "settings_cell",
        "prevSize" : 32,
        "code"     : 60439,
        "ligatures": "settings_cell",
        "tags"     : ["settings_cell"]
    }, {
        "order"    : 2524,
        "id"       : 220,
        "name"     : "settings_ethernet",
        "prevSize" : 32,
        "code"     : 60440,
        "ligatures": "settings_ethernet",
        "tags"     : ["settings_ethernet"]
    }, {
        "order"    : 2525,
        "id"       : 219,
        "name"     : "settings_input_antenna",
        "prevSize" : 32,
        "code"     : 60441,
        "ligatures": "settings_input_antenna",
        "tags"     : ["settings_input_antenna"]
    }, {
        "order"    : 2526,
        "id"       : 218,
        "name"     : "settings_input_component",
        "prevSize" : 32,
        "code"     : 60442,
        "ligatures": "settings_input_component",
        "tags"     : ["settings_input_component"]
    }, {
        "order"    : 2527,
        "id"       : 217,
        "name"     : "settings_input_composite",
        "prevSize" : 32,
        "code"     : 60443,
        "ligatures": "settings_input_composite",
        "tags"     : ["settings_input_composite"]
    }, {
        "order"    : 2528,
        "id"       : 216,
        "name"     : "settings_input_hdmi",
        "prevSize" : 32,
        "code"     : 60444,
        "ligatures": "settings_input_hdmi",
        "tags"     : ["settings_input_hdmi"]
    }, {
        "order"    : 2529,
        "id"       : 215,
        "name"     : "settings_input_svideo",
        "prevSize" : 32,
        "code"     : 60445,
        "ligatures": "settings_input_svideo",
        "tags"     : ["settings_input_svideo"]
    }, {
        "order"    : 2530,
        "id"       : 214,
        "name"     : "settings_overscan",
        "prevSize" : 32,
        "code"     : 60446,
        "ligatures": "settings_overscan",
        "tags"     : ["settings_overscan"]
    }, {
        "order"    : 2531,
        "id"       : 213,
        "name"     : "settings_phone",
        "prevSize" : 32,
        "code"     : 60447,
        "ligatures": "settings_phone",
        "tags"     : ["settings_phone"]
    }, {
        "order"    : 2532,
        "id"       : 212,
        "name"     : "settings_power",
        "prevSize" : 32,
        "code"     : 60448,
        "ligatures": "settings_power",
        "tags"     : ["settings_power"]
    }, {
        "order"    : 2533,
        "id"       : 211,
        "name"     : "settings_remote",
        "prevSize" : 32,
        "code"     : 60449,
        "ligatures": "settings_remote",
        "tags"     : ["settings_remote"]
    }, {
        "order"    : 2534,
        "id"       : 210,
        "name"     : "settings_system_daydream",
        "prevSize" : 32,
        "code"     : 60450,
        "ligatures": "settings_system_daydream",
        "tags"     : ["settings_system_daydream"]
    }, {
        "order"    : 2535,
        "id"       : 209,
        "name"     : "settings_voice",
        "prevSize" : 32,
        "code"     : 60451,
        "ligatures": "settings_voice",
        "tags"     : ["settings_voice"]
    }, {
        "order"    : 2536,
        "id"       : 208,
        "name"     : "settings",
        "prevSize" : 32,
        "code"     : 60452,
        "ligatures": "settings",
        "tags"     : ["settings"]
    }, {
        "order"    : 2537,
        "id"       : 207,
        "name"     : "share",
        "prevSize" : 32,
        "code"     : 60453,
        "ligatures": "share",
        "tags"     : ["share"]
    }, {
        "order"    : 2538,
        "id"       : 206,
        "name"     : "shop_two",
        "prevSize" : 32,
        "code"     : 60454,
        "ligatures": "shop_two",
        "tags"     : ["shop_two"]
    }, {
        "order"    : 2539,
        "id"       : 205,
        "name"     : "shop",
        "prevSize" : 32,
        "code"     : 60455,
        "ligatures": "shop",
        "tags"     : ["shop"]
    }, {
        "order"    : 2540,
        "id"       : 204,
        "name"     : "shopping_basket",
        "prevSize" : 32,
        "code"     : 60456,
        "ligatures": "shopping_basket",
        "tags"     : ["shopping_basket"]
    }, {
        "order"    : 2541,
        "id"       : 203,
        "name"     : "shopping_cart",
        "prevSize" : 32,
        "code"     : 60457,
        "ligatures": "shopping_cart",
        "tags"     : ["shopping_cart"]
    }, {
        "order"    : 2542,
        "id"       : 202,
        "name"     : "short_text",
        "prevSize" : 32,
        "code"     : 60458,
        "ligatures": "short_text",
        "tags"     : ["short_text"]
    }, {
        "order"    : 2543,
        "id"       : 201,
        "name"     : "show_chart",
        "prevSize" : 32,
        "code"     : 60459,
        "ligatures": "show_chart",
        "tags"     : ["show_chart"]
    }, {
        "order"    : 2544,
        "id"       : 200,
        "name"     : "shuffle",
        "prevSize" : 32,
        "code"     : 60460,
        "ligatures": "shuffle",
        "tags"     : ["shuffle"]
    }, {
        "order"    : 2545,
        "id"       : 199,
        "name"     : "shutter_speed",
        "prevSize" : 32,
        "code"     : 60461,
        "ligatures": "shutter_speed",
        "tags"     : ["shutter_speed"]
    }, {
        "order"    : 2546,
        "id"       : 198,
        "name"     : "signal_cellular_0_bar",
        "prevSize" : 32,
        "code"     : 60462,
        "ligatures": "signal_cellular_0_bar",
        "tags"     : ["signal_cellular_0_bar"]
    }, {
        "order"    : 2547,
        "id"       : 197,
        "name"     : "signal_cellular_4_bar",
        "prevSize" : 32,
        "code"     : 60463,
        "ligatures": "signal_cellular_4_bar",
        "tags"     : ["signal_cellular_4_bar"]
    }, {
        "order"    : 2548,
        "id"       : 196,
        "name"     : "signal_cellular_alt",
        "prevSize" : 32,
        "code"     : 60464,
        "ligatures": "signal_cellular_alt",
        "tags"     : ["signal_cellular_alt"]
    }, {
        "order"    : 2549,
        "id"       : 195,
        "name"     : "signal_cellular_connected_no_internet_4_bar",
        "prevSize" : 32,
        "code"     : 60465,
        "ligatures": "signal_cellular_connected_no_internet_4_bar",
        "tags"     : ["signal_cellular_connected_no_internet_4_bar"]
    }, {
        "order"    : 2550,
        "id"       : 194,
        "name"     : "signal_cellular_no_sim",
        "prevSize" : 32,
        "code"     : 60466,
        "ligatures": "signal_cellular_no_sim",
        "tags"     : ["signal_cellular_no_sim"]
    }, {
        "order"    : 2551,
        "id"       : 193,
        "name"     : "signal_cellular_null",
        "prevSize" : 32,
        "code"     : 60467,
        "ligatures": "signal_cellular_null",
        "tags"     : ["signal_cellular_null"]
    }, {
        "order"    : 2552,
        "id"       : 192,
        "name"     : "signal_cellular_off",
        "prevSize" : 32,
        "code"     : 60468,
        "ligatures": "signal_cellular_off",
        "tags"     : ["signal_cellular_off"]
    }, {
        "order"    : 2553,
        "id"       : 191,
        "name"     : "signal_wifi_0_bar",
        "prevSize" : 32,
        "code"     : 60469,
        "ligatures": "signal_wifi_0_bar",
        "tags"     : ["signal_wifi_0_bar"]
    }, {
        "order"    : 2554,
        "id"       : 190,
        "name"     : "signal_wifi_4_bar_lock",
        "prevSize" : 32,
        "code"     : 60470,
        "ligatures": "signal_wifi_4_bar_lock",
        "tags"     : ["signal_wifi_4_bar_lock"]
    }, {
        "order"    : 2555,
        "id"       : 189,
        "name"     : "signal_wifi_4_bar",
        "prevSize" : 32,
        "code"     : 60471,
        "ligatures": "signal_wifi_4_bar",
        "tags"     : ["signal_wifi_4_bar"]
    }, {
        "order"    : 2556,
        "id"       : 188,
        "name"     : "signal_wifi_off",
        "prevSize" : 32,
        "code"     : 60472,
        "ligatures": "signal_wifi_off",
        "tags"     : ["signal_wifi_off"]
    }, {
        "order"    : 2557,
        "id"       : 187,
        "name"     : "sim_card",
        "prevSize" : 32,
        "code"     : 60473,
        "ligatures": "sim_card",
        "tags"     : ["sim_card"]
    }, {
        "order"    : 2558,
        "id"       : 186,
        "name"     : "skip_next",
        "prevSize" : 32,
        "code"     : 60474,
        "ligatures": "skip_next",
        "tags"     : ["skip_next"]
    }, {
        "order"    : 2559,
        "id"       : 185,
        "name"     : "skip_previous",
        "prevSize" : 32,
        "code"     : 60475,
        "ligatures": "skip_previous",
        "tags"     : ["skip_previous"]
    }, {
        "order"    : 2560,
        "id"       : 184,
        "name"     : "slideshow",
        "prevSize" : 32,
        "code"     : 60476,
        "ligatures": "slideshow",
        "tags"     : ["slideshow"]
    }, {
        "order"    : 2561,
        "id"       : 183,
        "name"     : "slow_motion_video",
        "prevSize" : 32,
        "code"     : 60477,
        "ligatures": "slow_motion_video",
        "tags"     : ["slow_motion_video"]
    }, {
        "order"    : 2562,
        "id"       : 182,
        "name"     : "smartphone",
        "prevSize" : 32,
        "code"     : 60478,
        "ligatures": "smartphone",
        "tags"     : ["smartphone"]
    }, {
        "order"    : 2563,
        "id"       : 181,
        "name"     : "smoke_free",
        "prevSize" : 32,
        "code"     : 60479,
        "ligatures": "smoke_free",
        "tags"     : ["smoke_free"]
    }, {
        "order"    : 2564,
        "id"       : 180,
        "name"     : "smoking_rooms",
        "prevSize" : 32,
        "code"     : 60480,
        "ligatures": "smoking_rooms",
        "tags"     : ["smoking_rooms"]
    }, {
        "order"    : 2565,
        "id"       : 179,
        "name"     : "sms_failed",
        "prevSize" : 32,
        "code"     : 60481,
        "ligatures": "sms_failed",
        "tags"     : ["sms_failed"]
    }, {
        "order"    : 2566,
        "id"       : 178,
        "name"     : "sms",
        "prevSize" : 32,
        "code"     : 60482,
        "ligatures": "sms",
        "tags"     : ["sms"]
    }, {
        "order"    : 2567,
        "id"       : 177,
        "name"     : "snooze",
        "prevSize" : 32,
        "code"     : 60483,
        "ligatures": "snooze",
        "tags"     : ["snooze"]
    }, {
        "order"    : 2568,
        "id"       : 176,
        "name"     : "sort_by_alpha",
        "prevSize" : 32,
        "code"     : 60484,
        "ligatures": "sort_by_alpha",
        "tags"     : ["sort_by_alpha"]
    }, {
        "order"    : 2569,
        "id"       : 175,
        "name"     : "sort",
        "prevSize" : 32,
        "code"     : 60485,
        "ligatures": "sort",
        "tags"     : ["sort"]
    }, {
        "order"    : 2570,
        "id"       : 174,
        "name"     : "spa",
        "prevSize" : 32,
        "code"     : 60486,
        "ligatures": "spa",
        "tags"     : ["spa"]
    }, {
        "order"    : 2571,
        "id"       : 173,
        "name"     : "space_bar",
        "prevSize" : 32,
        "code"     : 60487,
        "ligatures": "space_bar",
        "tags"     : ["space_bar"]
    }, {
        "order"    : 2572,
        "id"       : 172,
        "name"     : "speaker_group",
        "prevSize" : 32,
        "code"     : 60488,
        "ligatures": "speaker_group",
        "tags"     : ["speaker_group"]
    }, {
        "order"    : 2573,
        "id"       : 171,
        "name"     : "speaker_notes_off",
        "prevSize" : 32,
        "code"     : 60489,
        "ligatures": "speaker_notes_off",
        "tags"     : ["speaker_notes_off"]
    }, {
        "order"    : 2574,
        "id"       : 170,
        "name"     : "speaker_notes",
        "prevSize" : 32,
        "code"     : 60490,
        "ligatures": "speaker_notes",
        "tags"     : ["speaker_notes"]
    }, {
        "order"    : 2575,
        "id"       : 169,
        "name"     : "speaker_phone",
        "prevSize" : 32,
        "code"     : 60491,
        "ligatures": "speaker_phone",
        "tags"     : ["speaker_phone"]
    }, {
        "order"    : 2576,
        "id"       : 168,
        "name"     : "speaker",
        "prevSize" : 32,
        "code"     : 60492,
        "ligatures": "speaker",
        "tags"     : ["speaker"]
    }, {
        "order"    : 2577,
        "id"       : 167,
        "name"     : "spellcheck",
        "prevSize" : 32,
        "code"     : 60493,
        "ligatures": "spellcheck",
        "tags"     : ["spellcheck"]
    }, {
        "order"    : 2578,
        "id"       : 166,
        "name"     : "star_border",
        "prevSize" : 32,
        "code"     : 60494,
        "ligatures": "star_border",
        "tags"     : ["star_border"]
    }, {
        "order"    : 2579,
        "id"       : 165,
        "name"     : "star_half",
        "prevSize" : 32,
        "code"     : 60495,
        "ligatures": "star_half",
        "tags"     : ["star_half"]
    }, {
        "order"    : 2580,
        "id"       : 164,
        "name"     : "star_rate",
        "prevSize" : 32,
        "code"     : 60496,
        "ligatures": "star_rate",
        "tags"     : ["star_rate"]
    }, {
        "order"    : 2581,
        "id"       : 163,
        "name"     : "star",
        "prevSize" : 32,
        "code"     : 60497,
        "ligatures": "star",
        "tags"     : ["star"]
    }, {
        "order"    : 2582,
        "id"       : 162,
        "name"     : "stars",
        "prevSize" : 32,
        "code"     : 60498,
        "ligatures": "stars",
        "tags"     : ["stars"]
    }, {
        "order"    : 2583,
        "id"       : 161,
        "name"     : "stay_current_landscape",
        "prevSize" : 32,
        "code"     : 60499,
        "ligatures": "stay_current_landscape",
        "tags"     : ["stay_current_landscape"]
    }, {
        "order"    : 2584,
        "id"       : 160,
        "name"     : "stay_current_portrait",
        "prevSize" : 32,
        "code"     : 60500,
        "ligatures": "stay_current_portrait",
        "tags"     : ["stay_current_portrait"]
    }, {
        "order"    : 2585,
        "id"       : 159,
        "name"     : "stay_primary_landscape",
        "prevSize" : 32,
        "code"     : 60501,
        "ligatures": "stay_primary_landscape",
        "tags"     : ["stay_primary_landscape"]
    }, {
        "order"    : 2586,
        "id"       : 158,
        "name"     : "stay_primary_portrait",
        "prevSize" : 32,
        "code"     : 60502,
        "ligatures": "stay_primary_portrait",
        "tags"     : ["stay_primary_portrait"]
    }, {
        "order"    : 2587,
        "id"       : 157,
        "name"     : "stop_screen_share",
        "prevSize" : 32,
        "code"     : 60503,
        "ligatures": "stop_screen_share",
        "tags"     : ["stop_screen_share"]
    }, {
        "order"    : 2588,
        "id"       : 156,
        "name"     : "stop",
        "prevSize" : 32,
        "code"     : 60504,
        "ligatures": "stop",
        "tags"     : ["stop"]
    }, {
        "order"    : 2589,
        "id"       : 155,
        "name"     : "storage",
        "prevSize" : 32,
        "code"     : 60505,
        "ligatures": "storage",
        "tags"     : ["storage"]
    }, {
        "order"    : 2590,
        "id"       : 154,
        "name"     : "store_mall_directory",
        "prevSize" : 32,
        "code"     : 60506,
        "ligatures": "store_mall_directory",
        "tags"     : ["store_mall_directory"]
    }, {
        "order"    : 2591,
        "id"       : 153,
        "name"     : "store",
        "prevSize" : 32,
        "code"     : 60507,
        "ligatures": "store",
        "tags"     : ["store"]
    }, {
        "order"    : 2592,
        "id"       : 152,
        "name"     : "straighten",
        "prevSize" : 32,
        "code"     : 60508,
        "ligatures": "straighten",
        "tags"     : ["straighten"]
    }, {
        "order"    : 2593,
        "id"       : 151,
        "name"     : "streetview",
        "prevSize" : 32,
        "code"     : 60509,
        "ligatures": "streetview",
        "tags"     : ["streetview"]
    }, {
        "order"    : 2594,
        "id"       : 150,
        "name"     : "strikethrough_s",
        "prevSize" : 32,
        "code"     : 60510,
        "ligatures": "strikethrough_s",
        "tags"     : ["strikethrough_s"]
    }, {
        "order"    : 2595,
        "id"       : 149,
        "name"     : "style",
        "prevSize" : 32,
        "code"     : 60511,
        "ligatures": "style",
        "tags"     : ["style"]
    }, {
        "order"    : 2596,
        "id"       : 148,
        "name"     : "subdirectory_arrow_left",
        "prevSize" : 32,
        "code"     : 60512,
        "ligatures": "subdirectory_arrow_left",
        "tags"     : ["subdirectory_arrow_left"]
    }, {
        "order"    : 2597,
        "id"       : 147,
        "name"     : "subdirectory_arrow_right",
        "prevSize" : 32,
        "code"     : 60513,
        "ligatures": "subdirectory_arrow_right",
        "tags"     : ["subdirectory_arrow_right"]
    }, {
        "order"    : 2598,
        "id"       : 146,
        "name"     : "subject",
        "prevSize" : 32,
        "code"     : 60514,
        "ligatures": "subject",
        "tags"     : ["subject"]
    }, {
        "order"    : 2599,
        "id"       : 145,
        "name"     : "subscriptions",
        "prevSize" : 32,
        "code"     : 60515,
        "ligatures": "subscriptions",
        "tags"     : ["subscriptions"]
    }, {
        "order"    : 2600,
        "id"       : 144,
        "name"     : "subtitles",
        "prevSize" : 32,
        "code"     : 60516,
        "ligatures": "subtitles",
        "tags"     : ["subtitles"]
    }, {
        "order"    : 2601,
        "id"       : 143,
        "name"     : "subway",
        "prevSize" : 32,
        "code"     : 60517,
        "ligatures": "subway",
        "tags"     : ["subway"]
    }, {
        "order"    : 2602,
        "id"       : 142,
        "name"     : "supervised_user_circle",
        "prevSize" : 32,
        "code"     : 60518,
        "ligatures": "supervised_user_circle",
        "tags"     : ["supervised_user_circle"]
    }, {
        "order"    : 2603,
        "id"       : 141,
        "name"     : "supervisor_account",
        "prevSize" : 32,
        "code"     : 60519,
        "ligatures": "supervisor_account",
        "tags"     : ["supervisor_account"]
    }, {
        "order"    : 2604,
        "id"       : 140,
        "name"     : "surround_sound",
        "prevSize" : 32,
        "code"     : 60520,
        "ligatures": "surround_sound",
        "tags"     : ["surround_sound"]
    }, {
        "order"    : 2605,
        "id"       : 139,
        "name"     : "swap_calls",
        "prevSize" : 32,
        "code"     : 60521,
        "ligatures": "swap_calls",
        "tags"     : ["swap_calls"]
    }, {
        "order"    : 2606,
        "id"       : 138,
        "name"     : "swap_horiz",
        "prevSize" : 32,
        "code"     : 60522,
        "ligatures": "swap_horiz",
        "tags"     : ["swap_horiz"]
    }, {
        "order"    : 2607,
        "id"       : 137,
        "name"     : "swap_horizontal_circle",
        "prevSize" : 32,
        "code"     : 60523,
        "ligatures": "swap_horizontal_circle",
        "tags"     : ["swap_horizontal_circle"]
    }, {
        "order"    : 2608,
        "id"       : 136,
        "name"     : "swap_vert",
        "prevSize" : 32,
        "code"     : 60524,
        "ligatures": "swap_vert",
        "tags"     : ["swap_vert"]
    }, {
        "order"    : 2609,
        "id"       : 135,
        "name"     : "swap_vertical_circle",
        "prevSize" : 32,
        "code"     : 60525,
        "ligatures": "swap_vertical_circle",
        "tags"     : ["swap_vertical_circle"]
    }, {
        "order"    : 2610,
        "id"       : 134,
        "name"     : "switch_camera",
        "prevSize" : 32,
        "code"     : 60526,
        "ligatures": "switch_camera",
        "tags"     : ["switch_camera"]
    }, {
        "order"    : 2611,
        "id"       : 133,
        "name"     : "switch_video",
        "prevSize" : 32,
        "code"     : 60527,
        "ligatures": "switch_video",
        "tags"     : ["switch_video"]
    }, {
        "order"    : 2612,
        "id"       : 132,
        "name"     : "sync_disabled",
        "prevSize" : 32,
        "code"     : 60528,
        "ligatures": "sync_disabled",
        "tags"     : ["sync_disabled"]
    }, {
        "order"    : 2613,
        "id"       : 131,
        "name"     : "sync_problem",
        "prevSize" : 32,
        "code"     : 60529,
        "ligatures": "sync_problem",
        "tags"     : ["sync_problem"]
    }, {
        "order"    : 2614,
        "id"       : 130,
        "name"     : "sync",
        "prevSize" : 32,
        "code"     : 60530,
        "ligatures": "sync",
        "tags"     : ["sync"]
    }, {
        "order"    : 2615,
        "id"       : 129,
        "name"     : "system_update",
        "prevSize" : 32,
        "code"     : 60531,
        "ligatures": "system_update",
        "tags"     : ["system_update"]
    }, {
        "order"    : 2616,
        "id"       : 128,
        "name"     : "tab_unselected",
        "prevSize" : 32,
        "code"     : 60532,
        "ligatures": "tab_unselected",
        "tags"     : ["tab_unselected"]
    }, {
        "order"    : 2617,
        "id"       : 127,
        "name"     : "tab",
        "prevSize" : 32,
        "code"     : 60533,
        "ligatures": "tab",
        "tags"     : ["tab"]
    }, {
        "order"    : 2618,
        "id"       : 126,
        "name"     : "table_chart",
        "prevSize" : 32,
        "code"     : 60534,
        "ligatures": "table_chart",
        "tags"     : ["table_chart"]
    }, {
        "order"    : 2619,
        "id"       : 125,
        "name"     : "tablet_android",
        "prevSize" : 32,
        "code"     : 60535,
        "ligatures": "tablet_android",
        "tags"     : ["tablet_android"]
    }, {
        "order"    : 2620,
        "id"       : 124,
        "name"     : "tablet_mac",
        "prevSize" : 32,
        "code"     : 60536,
        "ligatures": "tablet_mac",
        "tags"     : ["tablet_mac"]
    }, {
        "order"    : 2621,
        "id"       : 123,
        "name"     : "tablet",
        "prevSize" : 32,
        "code"     : 60537,
        "ligatures": "tablet",
        "tags"     : ["tablet"]
    }, {
        "order"    : 2622,
        "id"       : 122,
        "name"     : "tag_faces",
        "prevSize" : 32,
        "code"     : 60538,
        "ligatures": "tag_faces",
        "tags"     : ["tag_faces"]
    }, {
        "order"    : 2623,
        "id"       : 121,
        "name"     : "tap_and_play",
        "prevSize" : 32,
        "code"     : 60539,
        "ligatures": "tap_and_play",
        "tags"     : ["tap_and_play"]
    }, {
        "order"    : 2624,
        "id"       : 120,
        "name"     : "terrain",
        "prevSize" : 32,
        "code"     : 60540,
        "ligatures": "terrain",
        "tags"     : ["terrain"]
    }, {
        "order"    : 2625,
        "id"       : 119,
        "name"     : "text_fields",
        "prevSize" : 32,
        "code"     : 60541,
        "ligatures": "text_fields",
        "tags"     : ["text_fields"]
    }, {
        "order"    : 2626,
        "id"       : 118,
        "name"     : "text_format",
        "prevSize" : 32,
        "code"     : 60542,
        "ligatures": "text_format",
        "tags"     : ["text_format"]
    }, {
        "order"    : 2627,
        "id"       : 117,
        "name"     : "text_rotate_up",
        "prevSize" : 32,
        "code"     : 60543,
        "ligatures": "text_rotate_up",
        "tags"     : ["text_rotate_up"]
    }, {
        "order"    : 2628,
        "id"       : 116,
        "name"     : "text_rotate_vertical",
        "prevSize" : 32,
        "code"     : 60544,
        "ligatures": "text_rotate_vertical",
        "tags"     : ["text_rotate_vertical"]
    }, {
        "order"    : 2629,
        "id"       : 115,
        "name"     : "text_rotation_down",
        "prevSize" : 32,
        "code"     : 60545,
        "ligatures": "text_rotation_down",
        "tags"     : ["text_rotation_down"]
    }, {
        "order"    : 2630,
        "id"       : 114,
        "name"     : "text_rotation_none",
        "prevSize" : 32,
        "code"     : 60546,
        "ligatures": "text_rotation_none",
        "tags"     : ["text_rotation_none"]
    }, {
        "order"    : 2631,
        "id"       : 113,
        "name"     : "textsms",
        "prevSize" : 32,
        "code"     : 60547,
        "ligatures": "textsms",
        "tags"     : ["textsms"]
    }, {
        "order"    : 2632,
        "id"       : 112,
        "name"     : "texture",
        "prevSize" : 32,
        "code"     : 60548,
        "ligatures": "texture",
        "tags"     : ["texture"]
    }, {
        "order"    : 2633,
        "id"       : 111,
        "name"     : "theaters",
        "prevSize" : 32,
        "code"     : 60549,
        "ligatures": "theaters",
        "tags"     : ["theaters"]
    }, {
        "order"    : 2634,
        "id"       : 110,
        "name"     : "thumb_down_alt",
        "prevSize" : 32,
        "code"     : 60550,
        "ligatures": "thumb_down_alt",
        "tags"     : ["thumb_down_alt"]
    }, {
        "order"    : 2635,
        "id"       : 109,
        "name"     : "thumb_down",
        "prevSize" : 32,
        "code"     : 60551,
        "ligatures": "thumb_down",
        "tags"     : ["thumb_down"]
    }, {
        "order"    : 2636,
        "id"       : 108,
        "name"     : "thumb_up_alt",
        "prevSize" : 32,
        "code"     : 60552,
        "ligatures": "thumb_up_alt",
        "tags"     : ["thumb_up_alt"]
    }, {
        "order"    : 2637,
        "id"       : 107,
        "name"     : "thumb_up",
        "prevSize" : 32,
        "code"     : 60553,
        "ligatures": "thumb_up",
        "tags"     : ["thumb_up"]
    }, {
        "order"    : 2638,
        "id"       : 106,
        "name"     : "thumbs_up_down",
        "prevSize" : 32,
        "code"     : 60554,
        "ligatures": "thumbs_up_down",
        "tags"     : ["thumbs_up_down"]
    }, {
        "order"    : 2639,
        "id"       : 105,
        "name"     : "time_to_leave",
        "prevSize" : 32,
        "code"     : 60555,
        "ligatures": "time_to_leave",
        "tags"     : ["time_to_leave"]
    }, {
        "order"    : 2640,
        "id"       : 104,
        "name"     : "timelapse",
        "prevSize" : 32,
        "code"     : 60556,
        "ligatures": "timelapse",
        "tags"     : ["timelapse"]
    }, {
        "order"    : 2641,
        "id"       : 103,
        "name"     : "timeline",
        "prevSize" : 32,
        "code"     : 60557,
        "ligatures": "timeline",
        "tags"     : ["timeline"]
    }, {
        "order"    : 2642,
        "id"       : 102,
        "name"     : "timer_3",
        "prevSize" : 32,
        "code"     : 60558,
        "ligatures": "timer_3",
        "tags"     : ["timer_3"]
    }, {
        "order"    : 2643,
        "id"       : 101,
        "name"     : "timer_10",
        "prevSize" : 32,
        "code"     : 60559,
        "ligatures": "timer_10",
        "tags"     : ["timer_10"]
    }, {
        "order"    : 2644,
        "id"       : 100,
        "name"     : "timer_off",
        "prevSize" : 32,
        "code"     : 60560,
        "ligatures": "timer_off",
        "tags"     : ["timer_off"]
    }, {
        "order"    : 2645,
        "id"       : 99,
        "name"     : "timer",
        "prevSize" : 32,
        "code"     : 60561,
        "ligatures": "timer",
        "tags"     : ["timer"]
    }, {
        "order"    : 2646,
        "id"       : 98,
        "name"     : "title",
        "prevSize" : 32,
        "code"     : 60562,
        "ligatures": "title",
        "tags"     : ["title"]
    }, {
        "order"    : 2647,
        "id"       : 97,
        "name"     : "toc",
        "prevSize" : 32,
        "code"     : 60563,
        "ligatures": "toc",
        "tags"     : ["toc"]
    }, {
        "order"    : 2648,
        "id"       : 96,
        "name"     : "today",
        "prevSize" : 32,
        "code"     : 60564,
        "ligatures": "today",
        "tags"     : ["today"]
    }, {
        "order"    : 2649,
        "id"       : 95,
        "name"     : "toggle_off",
        "prevSize" : 32,
        "code"     : 60565,
        "ligatures": "toggle_off",
        "tags"     : ["toggle_off"]
    }, {
        "order"    : 2650,
        "id"       : 94,
        "name"     : "toggle_on",
        "prevSize" : 32,
        "code"     : 60566,
        "ligatures": "toggle_on",
        "tags"     : ["toggle_on"]
    }, {
        "order"    : 2651,
        "id"       : 93,
        "name"     : "toll",
        "prevSize" : 32,
        "code"     : 60567,
        "ligatures": "toll",
        "tags"     : ["toll"]
    }, {
        "order"    : 2652,
        "id"       : 92,
        "name"     : "tonality",
        "prevSize" : 32,
        "code"     : 60568,
        "ligatures": "tonality",
        "tags"     : ["tonality"]
    }, {
        "order"    : 2653,
        "id"       : 91,
        "name"     : "touch_app",
        "prevSize" : 32,
        "code"     : 60569,
        "ligatures": "touch_app",
        "tags"     : ["touch_app"]
    }, {
        "order"    : 2654,
        "id"       : 90,
        "name"     : "toys",
        "prevSize" : 32,
        "code"     : 60570,
        "ligatures": "toys",
        "tags"     : ["toys"]
    }, {
        "order"    : 2655,
        "id"       : 89,
        "name"     : "track_changes",
        "prevSize" : 32,
        "code"     : 60571,
        "ligatures": "track_changes",
        "tags"     : ["track_changes"]
    }, {
        "order"    : 2656,
        "id"       : 88,
        "name"     : "traffic",
        "prevSize" : 32,
        "code"     : 60572,
        "ligatures": "traffic",
        "tags"     : ["traffic"]
    }, {
        "order"    : 2657,
        "id"       : 87,
        "name"     : "train",
        "prevSize" : 32,
        "code"     : 60573,
        "ligatures": "train",
        "tags"     : ["train"]
    }, {
        "order"    : 2658,
        "id"       : 86,
        "name"     : "tram",
        "prevSize" : 32,
        "code"     : 60574,
        "ligatures": "tram",
        "tags"     : ["tram"]
    }, {
        "order"    : 2659,
        "id"       : 85,
        "name"     : "transfer_within_a_station",
        "prevSize" : 32,
        "code"     : 60575,
        "ligatures": "transfer_within_a_station",
        "tags"     : ["transfer_within_a_station"]
    }, {
        "order"    : 2660,
        "id"       : 84,
        "name"     : "transform",
        "prevSize" : 32,
        "code"     : 60576,
        "ligatures": "transform",
        "tags"     : ["transform"]
    }, {
        "order"    : 2661,
        "id"       : 83,
        "name"     : "transit_enterexit",
        "prevSize" : 32,
        "code"     : 60577,
        "ligatures": "transit_enterexit",
        "tags"     : ["transit_enterexit"]
    }, {
        "order"    : 2662,
        "id"       : 82,
        "name"     : "translate",
        "prevSize" : 32,
        "code"     : 60578,
        "ligatures": "translate",
        "tags"     : ["translate"]
    }, {
        "order"    : 2663,
        "id"       : 81,
        "name"     : "trending_down",
        "prevSize" : 32,
        "code"     : 60579,
        "ligatures": "trending_down",
        "tags"     : ["trending_down"]
    }, {
        "order"    : 2664,
        "id"       : 80,
        "name"     : "trending_flat",
        "prevSize" : 32,
        "code"     : 60580,
        "ligatures": "trending_flat",
        "tags"     : ["trending_flat"]
    }, {
        "order"    : 2665,
        "id"       : 79,
        "name"     : "trending_up",
        "prevSize" : 32,
        "code"     : 60581,
        "ligatures": "trending_up",
        "tags"     : ["trending_up"]
    }, {
        "order"    : 2666,
        "id"       : 78,
        "name"     : "trip_origin",
        "prevSize" : 32,
        "code"     : 60582,
        "ligatures": "trip_origin",
        "tags"     : ["trip_origin"]
    }, {
        "order"    : 2667,
        "id"       : 77,
        "name"     : "tune",
        "prevSize" : 32,
        "code"     : 60583,
        "ligatures": "tune",
        "tags"     : ["tune"]
    }, {
        "order"    : 2668,
        "id"       : 76,
        "name"     : "turned_in_not",
        "prevSize" : 32,
        "code"     : 60584,
        "ligatures": "turned_in_not",
        "tags"     : ["turned_in_not"]
    }, {
        "order"    : 2669,
        "id"       : 75,
        "name"     : "turned_in",
        "prevSize" : 32,
        "code"     : 60585,
        "ligatures": "turned_in",
        "tags"     : ["turned_in"]
    }, {
        "order"    : 2670,
        "id"       : 74,
        "name"     : "tv_off",
        "prevSize" : 32,
        "code"     : 60586,
        "ligatures": "tv_off",
        "tags"     : ["tv_off"]
    }, {
        "order"    : 2671,
        "id"       : 73,
        "name"     : "tv",
        "prevSize" : 32,
        "code"     : 60587,
        "ligatures": "tv",
        "tags"     : ["tv"]
    }, {
        "order"    : 2672,
        "id"       : 72,
        "name"     : "unarchive",
        "prevSize" : 32,
        "code"     : 60588,
        "ligatures": "unarchive",
        "tags"     : ["unarchive"]
    }, {
        "order"    : 2673,
        "id"       : 71,
        "name"     : "undo",
        "prevSize" : 32,
        "code"     : 60589,
        "ligatures": "undo",
        "tags"     : ["undo"]
    }, {
        "order"    : 2674,
        "id"       : 70,
        "name"     : "unfold_less",
        "prevSize" : 32,
        "code"     : 60590,
        "ligatures": "unfold_less",
        "tags"     : ["unfold_less"]
    }, {
        "order"    : 2675,
        "id"       : 69,
        "name"     : "unfold_more",
        "prevSize" : 32,
        "code"     : 60591,
        "ligatures": "unfold_more",
        "tags"     : ["unfold_more"]
    }, {
        "order"    : 2676,
        "id"       : 68,
        "name"     : "unsubscribe",
        "prevSize" : 32,
        "code"     : 60592,
        "ligatures": "unsubscribe",
        "tags"     : ["unsubscribe"]
    }, {
        "order"    : 2677,
        "id"       : 67,
        "name"     : "update",
        "prevSize" : 32,
        "code"     : 60593,
        "ligatures": "update",
        "tags"     : ["update"]
    }, {
        "order"    : 2678,
        "id"       : 66,
        "name"     : "usb",
        "prevSize" : 32,
        "code"     : 60594,
        "ligatures": "usb",
        "tags"     : ["usb"]
    }, {
        "order"    : 2679,
        "id"       : 65,
        "name"     : "verified_user",
        "prevSize" : 32,
        "code"     : 60595,
        "ligatures": "verified_user",
        "tags"     : ["verified_user"]
    }, {
        "order"    : 2680,
        "id"       : 64,
        "name"     : "vertical_align_bottom",
        "prevSize" : 32,
        "code"     : 60596,
        "ligatures": "vertical_align_bottom",
        "tags"     : ["vertical_align_bottom"]
    }, {
        "order"    : 2681,
        "id"       : 63,
        "name"     : "vertical_align_center",
        "prevSize" : 32,
        "code"     : 60597,
        "ligatures": "vertical_align_center",
        "tags"     : ["vertical_align_center"]
    }, {
        "order"    : 2682,
        "id"       : 62,
        "name"     : "vertical_align_top",
        "prevSize" : 32,
        "code"     : 60598,
        "ligatures": "vertical_align_top",
        "tags"     : ["vertical_align_top"]
    }, {
        "order"    : 2683,
        "id"       : 61,
        "name"     : "vertical_split",
        "prevSize" : 32,
        "code"     : 60599,
        "ligatures": "vertical_split",
        "tags"     : ["vertical_split"]
    }, {
        "order"    : 2684,
        "id"       : 60,
        "name"     : "vibration",
        "prevSize" : 32,
        "code"     : 60600,
        "ligatures": "vibration",
        "tags"     : ["vibration"]
    }, {
        "order"    : 2685,
        "id"       : 59,
        "name"     : "video_call",
        "prevSize" : 32,
        "code"     : 60601,
        "ligatures": "video_call",
        "tags"     : ["video_call"]
    }, {
        "order"    : 2686,
        "id"       : 58,
        "name"     : "video_label",
        "prevSize" : 32,
        "code"     : 60602,
        "ligatures": "video_label",
        "tags"     : ["video_label"]
    }, {
        "order"    : 2687,
        "id"       : 57,
        "name"     : "video_library",
        "prevSize" : 32,
        "code"     : 60603,
        "ligatures": "video_library",
        "tags"     : ["video_library"]
    }, {
        "order"    : 2688,
        "id"       : 56,
        "name"     : "videocam_off",
        "prevSize" : 32,
        "code"     : 60604,
        "ligatures": "videocam_off",
        "tags"     : ["videocam_off"]
    }, {
        "order"    : 2689,
        "id"       : 55,
        "name"     : "videocam",
        "prevSize" : 32,
        "code"     : 60605,
        "ligatures": "videocam",
        "tags"     : ["videocam"]
    }, {
        "order"    : 2690,
        "id"       : 54,
        "name"     : "videogame_asset",
        "prevSize" : 32,
        "code"     : 60606,
        "ligatures": "videogame_asset",
        "tags"     : ["videogame_asset"]
    }, {
        "order"    : 2691,
        "id"       : 53,
        "name"     : "view_agenda",
        "prevSize" : 32,
        "code"     : 60607,
        "ligatures": "view_agenda",
        "tags"     : ["view_agenda"]
    }, {
        "order"    : 2692,
        "id"       : 52,
        "name"     : "view_array",
        "prevSize" : 32,
        "code"     : 60608,
        "ligatures": "view_array",
        "tags"     : ["view_array"]
    }, {
        "order"    : 2693,
        "id"       : 51,
        "name"     : "view_carousel",
        "prevSize" : 32,
        "code"     : 60609,
        "ligatures": "view_carousel",
        "tags"     : ["view_carousel"]
    }, {
        "order"    : 2694,
        "id"       : 50,
        "name"     : "view_column",
        "prevSize" : 32,
        "code"     : 60610,
        "ligatures": "view_column",
        "tags"     : ["view_column"]
    }, {
        "order"    : 2695,
        "id"       : 49,
        "name"     : "view_comfy",
        "prevSize" : 32,
        "code"     : 60611,
        "ligatures": "view_comfy",
        "tags"     : ["view_comfy"]
    }, {
        "order"    : 2696,
        "id"       : 48,
        "name"     : "view_compact",
        "prevSize" : 32,
        "code"     : 60612,
        "ligatures": "view_compact",
        "tags"     : ["view_compact"]
    }, {
        "order"    : 2697,
        "id"       : 47,
        "name"     : "view_day",
        "prevSize" : 32,
        "code"     : 60613,
        "ligatures": "view_day",
        "tags"     : ["view_day"]
    }, {
        "order"    : 2698,
        "id"       : 46,
        "name"     : "view_headline",
        "prevSize" : 32,
        "code"     : 60614,
        "ligatures": "view_headline",
        "tags"     : ["view_headline"]
    }, {
        "order"    : 2699,
        "id"       : 45,
        "name"     : "view_list",
        "prevSize" : 32,
        "code"     : 60615,
        "ligatures": "view_list",
        "tags"     : ["view_list"]
    }, {
        "order"    : 2700,
        "id"       : 44,
        "name"     : "view_module",
        "prevSize" : 32,
        "code"     : 60616,
        "ligatures": "view_module",
        "tags"     : ["view_module"]
    }, {
        "order"    : 2701,
        "id"       : 43,
        "name"     : "view_quilt",
        "prevSize" : 32,
        "code"     : 60617,
        "ligatures": "view_quilt",
        "tags"     : ["view_quilt"]
    }, {
        "order"    : 2702,
        "id"       : 42,
        "name"     : "view_stream",
        "prevSize" : 32,
        "code"     : 60618,
        "ligatures": "view_stream",
        "tags"     : ["view_stream"]
    }, {
        "order"    : 2703,
        "id"       : 41,
        "name"     : "view_week",
        "prevSize" : 32,
        "code"     : 60619,
        "ligatures": "view_week",
        "tags"     : ["view_week"]
    }, {
        "order"    : 2704,
        "id"       : 40,
        "name"     : "vignette",
        "prevSize" : 32,
        "code"     : 60620,
        "ligatures": "vignette",
        "tags"     : ["vignette"]
    }, {
        "order"    : 2705,
        "id"       : 39,
        "name"     : "visibility_off",
        "prevSize" : 32,
        "code"     : 60621,
        "ligatures": "visibility_off",
        "tags"     : ["visibility_off"]
    }, {
        "order"    : 2706,
        "id"       : 38,
        "name"     : "visibility",
        "prevSize" : 32,
        "code"     : 60622,
        "ligatures": "visibility",
        "tags"     : ["visibility"]
    }, {
        "order"    : 2707,
        "id"       : 37,
        "name"     : "voice_chat",
        "prevSize" : 32,
        "code"     : 60623,
        "ligatures": "voice_chat",
        "tags"     : ["voice_chat"]
    }, {
        "order"    : 2708,
        "id"       : 36,
        "name"     : "voice_over_off",
        "prevSize" : 32,
        "code"     : 60624,
        "ligatures": "voice_over_off",
        "tags"     : ["voice_over_off"]
    }, {
        "order"    : 2709,
        "id"       : 35,
        "name"     : "voicemail",
        "prevSize" : 32,
        "code"     : 60625,
        "ligatures": "voicemail",
        "tags"     : ["voicemail"]
    }, {
        "order"    : 2710,
        "id"       : 34,
        "name"     : "volume_down",
        "prevSize" : 32,
        "code"     : 60626,
        "ligatures": "volume_down",
        "tags"     : ["volume_down"]
    }, {
        "order"    : 2711,
        "id"       : 33,
        "name"     : "volume_mute",
        "prevSize" : 32,
        "code"     : 60627,
        "ligatures": "volume_mute",
        "tags"     : ["volume_mute"]
    }, {
        "order"    : 2712,
        "id"       : 32,
        "name"     : "volume_off",
        "prevSize" : 32,
        "code"     : 60628,
        "ligatures": "volume_off",
        "tags"     : ["volume_off"]
    }, {
        "order"    : 2713,
        "id"       : 31,
        "name"     : "volume_up",
        "prevSize" : 32,
        "code"     : 60629,
        "ligatures": "volume_up",
        "tags"     : ["volume_up"]
    }, {
        "order"    : 2714,
        "id"       : 30,
        "name"     : "vpn_key",
        "prevSize" : 32,
        "code"     : 60630,
        "ligatures": "vpn_key",
        "tags"     : ["vpn_key"]
    }, {
        "order"    : 2715,
        "id"       : 29,
        "name"     : "vpn_lock",
        "prevSize" : 32,
        "code"     : 60631,
        "ligatures": "vpn_lock",
        "tags"     : ["vpn_lock"]
    }, {
        "order"    : 2716,
        "id"       : 28,
        "name"     : "wallpaper",
        "prevSize" : 32,
        "code"     : 60632,
        "ligatures": "wallpaper",
        "tags"     : ["wallpaper"]
    }, {
        "order"    : 2717,
        "id"       : 27,
        "name"     : "warning",
        "prevSize" : 32,
        "code"     : 60633,
        "ligatures": "warning",
        "tags"     : ["warning"]
    }, {
        "order"    : 2718,
        "id"       : 26,
        "name"     : "watch_later",
        "prevSize" : 32,
        "code"     : 60634,
        "ligatures": "watch_later",
        "tags"     : ["watch_later"]
    }, {
        "order"    : 2719,
        "id"       : 25,
        "name"     : "watch",
        "prevSize" : 32,
        "code"     : 60635,
        "ligatures": "watch",
        "tags"     : ["watch"]
    }, {
        "order"    : 2720,
        "id"       : 24,
        "name"     : "waves",
        "prevSize" : 32,
        "code"     : 60636,
        "ligatures": "waves",
        "tags"     : ["waves"]
    }, {
        "order"    : 2721,
        "id"       : 23,
        "name"     : "wb_auto",
        "prevSize" : 32,
        "code"     : 60637,
        "ligatures": "wb_auto",
        "tags"     : ["wb_auto"]
    }, {
        "order"    : 2722,
        "id"       : 22,
        "name"     : "wb_cloudy",
        "prevSize" : 32,
        "code"     : 60638,
        "ligatures": "wb_cloudy",
        "tags"     : ["wb_cloudy"]
    }, {
        "order"    : 2723,
        "id"       : 21,
        "name"     : "wb_incandescent",
        "prevSize" : 32,
        "code"     : 60639,
        "ligatures": "wb_incandescent",
        "tags"     : ["wb_incandescent"]
    }, {
        "order"    : 2724,
        "id"       : 20,
        "name"     : "wb_iridescent",
        "prevSize" : 32,
        "code"     : 60640,
        "ligatures": "wb_iridescent",
        "tags"     : ["wb_iridescent"]
    }, {
        "order"    : 2725,
        "id"       : 19,
        "name"     : "wb_sunny",
        "prevSize" : 32,
        "code"     : 60641,
        "ligatures": "wb_sunny",
        "tags"     : ["wb_sunny"]
    }, {
        "order"    : 2726,
        "id"       : 18,
        "name"     : "wc",
        "prevSize" : 32,
        "code"     : 60642,
        "ligatures": "wc",
        "tags"     : ["wc"]
    }, {
        "order"    : 2727,
        "id"       : 17,
        "name"     : "web_asset",
        "prevSize" : 32,
        "code"     : 60643,
        "ligatures": "web_asset",
        "tags"     : ["web_asset"]
    }, {
        "order"    : 2728,
        "id"       : 16,
        "name"     : "web",
        "prevSize" : 32,
        "code"     : 60644,
        "ligatures": "web",
        "tags"     : ["web"]
    }, {
        "order"    : 2729,
        "id"       : 15,
        "name"     : "weekend",
        "prevSize" : 32,
        "code"     : 60645,
        "ligatures": "weekend",
        "tags"     : ["weekend"]
    }, {
        "order"    : 2730,
        "id"       : 14,
        "name"     : "whatshot",
        "prevSize" : 32,
        "code"     : 60646,
        "ligatures": "whatshot",
        "tags"     : ["whatshot"]
    }, {
        "order"    : 2731,
        "id"       : 13,
        "name"     : "where_to_vote",
        "prevSize" : 32,
        "code"     : 60647,
        "ligatures": "where_to_vote",
        "tags"     : ["where_to_vote"]
    }, {
        "order"    : 2732,
        "id"       : 12,
        "name"     : "widgets",
        "prevSize" : 32,
        "code"     : 60648,
        "ligatures": "widgets",
        "tags"     : ["widgets"]
    }, {
        "order"    : 2733,
        "id"       : 11,
        "name"     : "wifi_lock",
        "prevSize" : 32,
        "code"     : 60649,
        "ligatures": "wifi_lock",
        "tags"     : ["wifi_lock"]
    }, {
        "order"    : 2734,
        "id"       : 10,
        "name"     : "wifi_off",
        "prevSize" : 32,
        "code"     : 60650,
        "ligatures": "wifi_off",
        "tags"     : ["wifi_off"]
    }, {
        "order"    : 2735,
        "id"       : 9,
        "name"     : "wifi_tethering",
        "prevSize" : 32,
        "code"     : 60651,
        "ligatures": "wifi_tethering",
        "tags"     : ["wifi_tethering"]
    }, {
        "order"    : 2736,
        "id"       : 8,
        "name"     : "wifi",
        "prevSize" : 32,
        "code"     : 60652,
        "ligatures": "wifi",
        "tags"     : ["wifi"]
    }, {
        "order"    : 2737,
        "id"       : 7,
        "name"     : "work_off",
        "prevSize" : 32,
        "code"     : 60653,
        "ligatures": "work_off",
        "tags"     : ["work_off"]
    }, {
        "order"    : 2738,
        "id"       : 6,
        "name"     : "work_outline",
        "prevSize" : 32,
        "code"     : 60654,
        "ligatures": "work_outline",
        "tags"     : ["work_outline"]
    }, {
        "order"    : 2739,
        "id"       : 5,
        "name"     : "work",
        "prevSize" : 32,
        "code"     : 60655,
        "ligatures": "work",
        "tags"     : ["work"]
    }, {
        "order"    : 2740,
        "id"       : 4,
        "name"     : "wrap_text",
        "prevSize" : 32,
        "code"     : 60656,
        "ligatures": "wrap_text",
        "tags"     : ["wrap_text"]
    }, {
        "order"    : 2741,
        "id"       : 3,
        "name"     : "youtube_searched_for",
        "prevSize" : 32,
        "code"     : 60657,
        "ligatures": "youtube_searched_for",
        "tags"     : ["youtube_searched_for"]
    }, {
        "order"    : 2742,
        "id"       : 2,
        "name"     : "zoom_in",
        "prevSize" : 32,
        "code"     : 60658,
        "ligatures": "zoom_in",
        "tags"     : ["zoom_in"]
    }, {
        "order"    : 2743,
        "id"       : 1,
        "name"     : "zoom_out_map",
        "prevSize" : 32,
        "code"     : 60659,
        "ligatures": "zoom_out_map",
        "tags"     : ["zoom_out_map"]
    }, {
        "order"    : 2744,
        "id"       : 0,
        "name"     : "zoom_out",
        "prevSize" : 32,
        "code"     : 60660,
        "ligatures": "zoom_out",
        "tags"     : ["zoom_out"]
    }
];

mock.onGet('/api/icons').reply((config) => {
    /*
    For Reduce the icons object
    let data = _.map(iconsDB, (item) => _.pick(item, ['properties', 'icon.tags']));
    data = _.map(data, (item) => ({...item.properties, ...item.icon}));
    return [200, data];
    */
    return [200, iconsDB];
});
