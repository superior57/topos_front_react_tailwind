import moment from 'moment';

moment.locale('pt',
{
  months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
  monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
  weekdays : 'domingo_segunda_terça_quarta_quinta_sexta_sábado'.split('_'),
    weekdaysShort : 'dom_seg_ter_quar_qui_se_sab'.split('_'),
    weekdaysMin : 'dom_seg_ter_quar_qui_se_sab'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
})

export default moment;