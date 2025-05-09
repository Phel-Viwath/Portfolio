(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-browser-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-browser-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-browser-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-browser-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-browser-js-ir'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.c8;
  var initMetadataForObject = kotlin_kotlin.$_$.l7;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(HTML, 'HTML');
  //endregion
  function HTML() {
    HTML_instance = this;
  }
  protoOf(HTML).get_a_1mhr5k_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'a';
  };
  protoOf(HTML).get_abbr_woioai_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'abbr';
  };
  protoOf(HTML).get_address_hpr2t1_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'address';
  };
  protoOf(HTML).get_area_woj07q_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'area';
  };
  protoOf(HTML).get_article_auhgc3_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'article';
  };
  protoOf(HTML).get_aside_iot53j_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'aside';
  };
  protoOf(HTML).get_audio_ioubhp_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'audio';
  };
  protoOf(HTML).get_b_1mhr5l_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'b';
  };
  protoOf(HTML).get_base_wojaxm_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'base';
  };
  protoOf(HTML).get_bdi_18j8xu_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bdi';
  };
  protoOf(HTML).get_bdo_18j8xo_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'bdo';
  };
  protoOf(HTML).get_blockquote_1dn2qg_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'blockquote';
  };
  protoOf(HTML).get_body_wojkyz_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'body';
  };
  protoOf(HTML).get_br_knto2v_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'br';
  };
  protoOf(HTML).get_button_bmjiuz_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'button';
  };
  protoOf(HTML).get_canvas_bshgm9_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'canvas';
  };
  protoOf(HTML).get_caption_aejif1_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'caption';
  };
  protoOf(HTML).get_cite_wok3vk_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'cite';
  };
  protoOf(HTML).get_code_wok7xy_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'code';
  };
  protoOf(HTML).get_col_18j7xl_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'col';
  };
  protoOf(HTML).get_colgroup_spee2w_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'colgroup';
  };
  protoOf(HTML).get_data_wokkxf_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'data';
  };
  protoOf(HTML).get_datalist_27cqun_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'datalist';
  };
  protoOf(HTML).get_dd_knto1j_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dd';
  };
  protoOf(HTML).get_del_18j7fi_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'del';
  };
  protoOf(HTML).get_details_r0zbrt_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'details';
  };
  protoOf(HTML).get_dfn_18j7el_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dfn';
  };
  protoOf(HTML).get_dialog_cdoxu9_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dialog';
  };
  protoOf(HTML).get_div_18j7bs_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'div';
  };
  protoOf(HTML).get_dl_knto1b_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dl';
  };
  protoOf(HTML).get_dt_knto13_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'dt';
  };
  protoOf(HTML).get_em_knto0f_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'em';
  };
  protoOf(HTML).get_embed_iqwcds_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'embed';
  };
  protoOf(HTML).get_fieldset_nv2uwh_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'fieldset';
  };
  protoOf(HTML).get_figcaption_f7t6ol_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'figcaption';
  };
  protoOf(HTML).get_figure_dbw7al_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'figure';
  };
  protoOf(HTML).get_footer_dfc1pg_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'footer';
  };
  protoOf(HTML).get_form_wom58t_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'form';
  };
  protoOf(HTML).get_h1_kntnzi_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'h1';
  };
  protoOf(HTML).get_h2_kntnzh_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'h2';
  };
  protoOf(HTML).get_h3_kntnzg_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'h3';
  };
  protoOf(HTML).get_h4_kntnzf_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'h4';
  };
  protoOf(HTML).get_h5_kntnze_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'h5';
  };
  protoOf(HTML).get_h6_kntnzd_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'h6';
  };
  protoOf(HTML).get_head_won7e1_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'head';
  };
  protoOf(HTML).get_header_e7o2vq_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'header';
  };
  protoOf(HTML).get_hgroup_e92rds_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hgroup';
  };
  protoOf(HTML).get_hr_kntnxp_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'hr';
  };
  protoOf(HTML).get_html_wonit0_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'html';
  };
  protoOf(HTML).get_i_1mhr5s_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'i';
  };
  protoOf(HTML).get_iframe_epkalp_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'iframe';
  };
  protoOf(HTML).get_img_18j3ja_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'img';
  };
  protoOf(HTML).get_input_it4gip_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'input';
  };
  protoOf(HTML).get_ins_18j3i3_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ins';
  };
  protoOf(HTML).get_kbd_18j2bg_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'kbd';
  };
  protoOf(HTML).get_label_iuj8p7_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'label';
  };
  protoOf(HTML).get_legend_g3yfbq_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'legend';
  };
  protoOf(HTML).get_li_kntnui_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'li';
  };
  protoOf(HTML).get_link_wopumb_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'link';
  };
  protoOf(HTML).get_main_woqbk2_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'main';
  };
  protoOf(HTML).get_map_18j0ul_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'map';
  };
  protoOf(HTML).get_mark_woqbrq_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'mark';
  };
  protoOf(HTML).get_menu_woqenc_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'menu';
  };
  protoOf(HTML).get_meta_woqery_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'meta';
  };
  protoOf(HTML).get_meter_iv5ylc_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'meter';
  };
  protoOf(HTML).get_nav_18j03q_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'nav';
  };
  protoOf(HTML).get_noscript_656maz_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'noscript';
  };
  protoOf(HTML).get_object_hhhtfs_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'object';
  };
  protoOf(HTML).get_ol_kntnru_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ol';
  };
  protoOf(HTML).get_optgroup_x50znv_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'optgroup';
  };
  protoOf(HTML).get_option_hpdev2_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'option';
  };
  protoOf(HTML).get_output_hs4j62_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'output';
  };
  protoOf(HTML).get_p_1mhr5z_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'p';
  };
  protoOf(HTML).get_picture_8af27f_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'picture';
  };
  protoOf(HTML).get_pre_18iy86_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'pre';
  };
  protoOf(HTML).get_progress_mo5qeu_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'progress';
  };
  protoOf(HTML).get_q_1mhr60_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'q';
  };
  protoOf(HTML).get_rp_kntnp5_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rp';
  };
  protoOf(HTML).get_rt_kntnp1_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rt';
  };
  protoOf(HTML).get_ruby_wotx5v_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ruby';
  };
  protoOf(HTML).get_s_1mhr62_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 's';
  };
  protoOf(HTML).get_samp_wou5kq_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'samp';
  };
  protoOf(HTML).get_script_jedas4_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'script';
  };
  protoOf(HTML).get_section_xul1x8_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'section';
  };
  protoOf(HTML).get_select_jfcyrp_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'select';
  };
  protoOf(HTML).get_slot_wouds7_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'slot';
  };
  protoOf(HTML).get_small_iylg4e_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'small';
  };
  protoOf(HTML).get_source_jl0x7o_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'source';
  };
  protoOf(HTML).get_span_wouger_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'span';
  };
  protoOf(HTML).get_strong_jnpx9c_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'strong';
  };
  protoOf(HTML).get_style_iyqetk_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'style';
  };
  protoOf(HTML).get_sub_18ivxl_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'sub';
  };
  protoOf(HTML).get_summary_tgfqkj_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'summary';
  };
  protoOf(HTML).get_sup_18ivx7_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'sup';
  };
  protoOf(HTML).get_table_iyxllx_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'table';
  };
  protoOf(HTML).get_tbody_iyyi25_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tbody';
  };
  protoOf(HTML).get_td_kntnnr_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'td';
  };
  protoOf(HTML).get_template_hdczer_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'template';
  };
  protoOf(HTML).get_textarea_mmvbib_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'textarea';
  };
  protoOf(HTML).get_tfoot_iz129l_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tfoot';
  };
  protoOf(HTML).get_th_kntnnn_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'th';
  };
  protoOf(HTML).get_thead_iz24h7_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'thead';
  };
  protoOf(HTML).get_time_wouyhi_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'time';
  };
  protoOf(HTML).get_title_iz32un_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'title';
  };
  protoOf(HTML).get_tr_kntnnd_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'tr';
  };
  protoOf(HTML).get_track_iz8ffm_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'track';
  };
  protoOf(HTML).get_u_1mhr64_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'u';
  };
  protoOf(HTML).get_ul_kntnmo_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'ul';
  };
  protoOf(HTML).get_var_18iu6a_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'var';
  };
  protoOf(HTML).get_video_j06c0i_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'video';
  };
  protoOf(HTML).get_wbr_18iteq_k$ = function () {
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'wbr';
  };
  var HTML_instance;
  function HTML_getInstance() {
    if (HTML_instance == null)
      new HTML();
    return HTML_instance;
  }
  function HtmlTagName(tagName) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return tagName;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HTML_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-browser-js-ir.js.map
