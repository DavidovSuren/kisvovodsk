jQuery(document).ready(function ($) {

    function eg_reset_data_index(selector) {
        var count = 0;
        var total_items = selector.closest('.eg-wrap').find('a[data-lightbox-type]').length;
        selector.closest('.eg-wrap').find('a[data-lightbox-type]').each(function () {
            count++;

            $(this).attr('data-index', count);
            $(this).data('index', count);
            $(this).attr('data-total-items', total_items);
            $(this).data('total-items', total_items);
        });
    }
    function eg_initialize_lightbox() {
        $('.eg-wrap').each(function () {
            var selector = $(this);
            var lightbox_status = selector.data('lightbox-status');
            if (lightbox_status) {
                var lightbox_type = $(this).data('lightbox-type');
                switch (lightbox_type) {
                    case 'pretty_photo':
                        var theme = selector.data('pretty_photo-theme');
                        var social_tools = selector.data('pretty_photo-social');
                        if (social_tools) {
                            selector.find("a[data-lightbox-type='pretty_photo']").prettyPhoto({
                                theme: theme
                            });
                        } else {
                            selector.find("a[data-lightbox-type='pretty_photo']").prettyPhoto({
                                theme: theme,
                                social_tools: false
                            });
                        }
                        break;
                    case 'colorbox':
                        var transition_type = selector.data('colorbox-transition');
                        selector.find("a[data-lightbox-type='colorbox']").colorbox({height: '90%', transition: transition_type});
                        break;
                    case 'magnific_popup':
                        selector.find("a[data-lightbox-type='magnific_popup']").magnificPopup({
                            type: 'image',
                            gallery: {enabled: true}
                        });
                        break;
                    case 'photoswipe':
                        if ($('.pswp').length == 0) {

                        }
                        break;
                }
            }
        });
    }

    /*
     * Builds Pagination Links
     *
     * @param {int} current_page
     * @param {int} total_page
     * @param {int} gallery_id
     * @param {string} layout_type
     * @return {string}
     */
    function build_pagination_html(current_page, total_page, gallery_id, layout_type) {
        var pagination_html = '';
        if (current_page > 1) {
            pagination_html += '<li class="eg-previous-page-wrap"><a href="javascript:void(0);" class="eg-previous-page" data-total-page="' + total_page + '" data-layout-type="' + layout_type + '" data-gallery-id="' + gallery_id + '">&lt;</a></li>';
        }
        var upper_limit = current_page + 2;
        var lower_limit = current_page - 2;
        if (upper_limit > total_page) {
            upper_limit = total_page;
        }

        if (lower_limit < 1) {
            lower_limit = 1;
        }
        if (upper_limit - lower_limit < 5 && upper_limit - 4 >= 1) {
            lower_limit = upper_limit - 4;
        }
        if (upper_limit < 5 && total_page >= 5) {
            upper_limit = 5;
        }

        for (var page_count = lower_limit; page_count <= upper_limit; page_count++) {
            var page_class = (current_page == page_count) ? 'eg-current-page eg-page-link' : 'eg-page-link';
            pagination_html += '<li><a href="javascript:void(0);" data-total-page="' + total_page + '" data-page-number="' + page_count + '" class="' + page_class + '" data-layout-type="' + layout_type + '" data-gallery-id="' + gallery_id + '">' + page_count + '</a></li>';
        }
        if (current_page < total_page) {
            pagination_html += '<li class="eg-next-page-wrap"><a href="javascript:void(0);" data-total-page="' + total_page + '" class="eg-next-page" data-layout-type="' + layout_type + '" data-gallery-id="' + gallery_id + '">&gt;</a></li>';
        }
        return pagination_html;
    }


    eg_initialize_lightbox();
    $('body').on('click', '.eg-zoom', function () {
        $(this).closest('.eg-each-item').find('a[data-lightbox-type]').click();
    });
    $('body').on('click', '.eg-page-link', function () {
        var selector = $(this);
        selector.closest('.eg-pagination-block').find('.eg-page-link').removeClass('eg-current-page');
        $(this).addClass('eg-current-page');
        var layout_type = $(this).data('layout-type');
        var page_num = $(this).data('page-number');
        var gallery_id = $(this).data('gallery-id');
        var total_page = $(this).data('total-page');
        $.ajax({
            type: 'post',
            url: eg_frontend_js_object.ajax_url,
            data: {
                action: 'eg_pagination_action',
                _wpnonce: eg_frontend_js_object.ajax_nonce,
                layout_type: layout_type,
                page_num: page_num,
                gallery_id: gallery_id
            },
            beforeSend: function (xhr) {
                selector.closest('.eg-pagination-block').find('.eg-ajax-loader').show();
            },
            success: function (response) {
                if (selector.closest('.eg-wrap').find('.eg-filter-wrap').length > 0) {
                    selector.closest('.eg-wrap').find('.eg-filter-trigger[data-filter-key="all"]').click();
                }
                selector.closest('.eg-pagination-block').find('.eg-ajax-loader').hide();
                if (layout_type == 'masonary') {
                    var masonary_id = selector.closest('.eg-masonary-wrap').find('.eg-masonary-items-wrap').data('masonary-id');
                    masonary_obj[masonary_id].isotope('destroy');
                    selector.closest('.eg-wrap').find('.eg-' + layout_type + '-items-wrap').html(response);
                    selector.closest('.eg-wrap').find('.eg-' + layout_type + '-items-wrap').imagesLoaded(function () {
                        $('.eg-masonary-items-wrap').isotope({
                            itemSelector: '.eg-each-item',
                            percentPosition: true,
                            masonry: {
                                // use element for option
                                columnWidth: '.eg-each-item'
                            }
                        });
                    });

                } else {
                    selector.closest('.eg-wrap').find('.eg-' + layout_type + '-items-wrap').html(response);
                }
                eg_initialize_lightbox();
                var pagination_html = build_pagination_html(page_num, total_page, gallery_id, layout_type);
                selector.closest('.eg-wrap').find('.eg-pagination-block ul').html(pagination_html);
            }
        });
    });

    /**
     * Load More Action
     *
     * @since 1.0.0
     */
    $('.eg-load-more-trigger').click(function () {
        var selector = $(this);
        var masonary_id = selector.closest('.eg-masonary-wrap').find('.eg-masonary-items-wrap').data('masonary-id');
        var layout_type = $(this).data('layout-type');
        var page_num = $(this).data('page-number');
        var gallery_id = $(this).data('gallery-id');
        var total_page = $(this).data('total-page');
        var next_page = parseInt(page_num) + 1;
        if (next_page <= total_page) {
            $.ajax({
                type: 'post',
                url: eg_frontend_js_object.ajax_url,
                data: {
                    action: 'eg_pagination_action',
                    _wpnonce: eg_frontend_js_object.ajax_nonce,
                    layout_type: layout_type,
                    page_num: next_page,
                    gallery_id: gallery_id
                },
                beforeSend: function (xhr) {
                    selector.hide();
                    selector.closest('.eg-load-more-block').find('.eg-ajax-loader').show();
                },
                success: function (response) {
                    selector.data('page-number', next_page);
                    selector.closest('.eg-load-more-block').find('.eg-ajax-loader').hide();
                    if (selector.closest('.eg-wrap').find('.eg-filter-wrap').length > 0) {
                        selector.closest('.eg-wrap').find('.eg-filter-trigger[data-filter-key="all"]').click();
                    }

                    if (layout_type == 'masonary') {
                        var $items = $(response);
                        masonary_obj[masonary_id].append($items).isotope('appended', $items);
                        masonary_obj[masonary_id].imagesLoaded(function () {
                        })
                                .done(function (instance) {
                                    console.log('all images successfully loaded');
                                    selector.closest('.ap_pagination').find('.ap_wait_loader').hide();
                                    selector.show();
                                    masonary_obj[masonary_id].isotope('reloadItems').isotope();
                                })
                                .fail(function () {
                                    console.log('all images loaded, at least one is broken');


                                    masonary_obj[masonary_id].isotope('reloadItems').isotope();
                                })
                                .progress(function (instance, image) {
                                });

                    } else {
                        selector.closest('.eg-wrap').find('.eg-' + layout_type + '-items-wrap').append(response);
                    }
                    eg_reset_data_index(selector);
                    eg_initialize_lightbox();
                    if (next_page == total_page) {
                        selector.remove();
                    } else {

                        selector.show();
                    }
                }
            });
        } else {
            selector.remove();
        }
    });
    var masonary_obj = [];
    $('.eg-masonary-items-wrap').each(function () {
        var $selector = $(this);
        var masonary_id = $(this).data('masonary-id');
        masonary_obj[masonary_id] = $selector.imagesLoaded(function () {
            masonary_obj[masonary_id].isotope({
                itemSelector: '.eg-each-item',
                percentPosition: true,
                masonry: {
                    // use element for option
                    columnWidth: '.eg-each-item'
                }
            });
        });
    });
    $('.eg-filter-trigger').click(function () {
        var selector = $(this);
        var filter_key = selector.data('filter-key');
        var layout_type = selector.data('layout-type');
        selector.closest('.eg-filter-wrap').find('.eg-filter-trigger').removeClass('eg-active-filter');
        selector.addClass('eg-active-filter');
        if (layout_type == 'grid') {
            if (filter_key == 'all') {
                selector.closest('.eg-wrap').find('.eg-each-item').removeClass('eg-hidden-grid').addClass('eg-visible-grid').show();

            } else {
                selector.closest('.eg-wrap').find('.eg-each-item').addClass('eg-hidden-grid').removeClass('eg-visible-grid').hide();
                selector.closest('.eg-wrap').find('.' + filter_key).removeClass('eg-hidden-grid').addClass('eg-visible-grid').show();

            }
        } else if (layout_type == 'masonary') {

            filterValue = (filter_key == 'all') ? '*' : '.' + filter_key;
            var masonary_id = selector.closest('.eg-masonary-wrap').find('.eg-masonary-items-wrap').data('masonary-id');
            masonary_obj[masonary_id].isotope({filter: filterValue});
        }
    });
    /**
     * Slideshow Layout initialization
     *
     * @since 1.0.0
     */
    var slideshow_obj = [];
    $('.eg-slideshow-items-wrap').each(function () {
        var selector = $(this);
        var pause_duration = selector.data('pause-duration');
        var transition_duration = selector.data('transition-duration');
        var mode = selector.data('mode');
        var next_previous_controls = selector.data('next-previous-controls');
        var play_pause_controls = selector.data('play-pause-controls');
        var auto_start = selector.data('auto-start');
        var adaptive_height = selector.data('adaptive-height');
        var pager = selector.data('pager');
        var pager_type = selector.data('pager-type');
        var slideshow_id = selector.data('slideshow-id');
        slideshow_obj[slideshow_id] = selector.bxSlider({
            mode: mode,
            controls: next_previous_controls,
            auto: auto_start,
            pause: pause_duration,
            pager: pager,
            pagerType: pager_type,
            autoControls: play_pause_controls,
            speed: transition_duration,
            autoHover: true,
            adaptiveHeight: adaptive_height,
            autoControlsCombine: true
        });
        // console.log(slideshow_obj);

    });
    /**
     * Flimstrip Layout initialization
     *
     * @since 1.0.0
     */
    var filmstrip_obj = [];
    $('.eg-filmstrip-items-wrap').each(function () {
        var selector = $(this);
        var pause_duration = selector.data('pause-duration');
        var transition_duration = selector.data('transition-duration');
        var mode = selector.data('mode');
        var next_previous_controls = selector.data('next-previous-controls');
        var play_pause_controls = selector.data('play-pause-controls');
        var auto_start = selector.data('auto-start');
        var adaptive_height = selector.data('adaptive-height');
        var pager = selector.data('pager');
        var pager_type = selector.data('pager-type');
        var filmstrip_id = selector.data('filmstrip-id');
        filmstrip_obj[filmstrip_id] = selector.bxSlider({
            mode: mode,
            controls: next_previous_controls,
            auto: auto_start,
            pause: pause_duration,
            pager: true,
            autoControls: play_pause_controls,
            speed: transition_duration,
            autoHover: true,
            pagerCustom: '#eg-pager-' + filmstrip_id,
            adaptiveHeight: adaptive_height,
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                selector.closest('.eg-filmstrip-outer-wrap').find('.eg-filmstrip-pager a').each(function () {
                    if ($(this).data('slide-index') == newIndex) {
                        $(this).addClass('eg-active-filmstrip');
                    } else {
                        $(this).removeClass('eg-active-filmstrip');
                    }
                });
            }
        });
        // console.log(filmstrip_obj);

    });
    /**
     * Filmstrip Pager Slider initialization
     *
     * @since 1.0.0
     */

    $('.eg-filmstrip-pager').each(function () {
        var min_slides = $(this).data('min-slides');
        var max_slides = $(this).data('max-slides');
        var slide_width = $(this).data('slide-width');
        var move_slides = $(this).data('move-slides');
        $(this).bxSlider({
            minSlides: min_slides,
            maxSlides: max_slides,
            slideWidth: slide_width,
            slideMargin: 5,
            moveSlides: move_slides,
            pager: false,

        });
    });


    /**
     * Carousel initialization
     *
     * @since 1.0.0
     */
    $('.eg-carousel-items-wrap').each(function () {
        var selector = $(this);
        var pause_duration = selector.data('pause-duration');
        var controls = selector.data('controls');
        var auto_start = selector.data('auto-start');
        var min_slides = $(this).data('min-slides');
        var max_slides = $(this).data('max-slides');
        var slide_width = $(this).data('slide-width');
        var move_slides = $(this).data('move-slides');
        $(this).bxSlider({
            controls: controls,
            auto: auto_start,
            pause: pause_duration,
            minSlides: min_slides,
            maxSlides: max_slides,
            slideWidth: slide_width,
            slideMargin: 5,
            moveSlides: move_slides,
            pager: true,
            autoHover: true
        });
    });
    /**
     * Next Page Pagination
     *
     * @since 1.0.0
     */
    $('body').on('click', '.eg-next-page,.eg-previous-page', function () {
        var selector = $(this);
        var layout_type = $(this).data('layout-type');
        var gallery_id = $(this).data('gallery-id');
        var total_page = $(this).data('total-page');
        var current_page = $(this).closest('.eg-pagination-block').find('.eg-current-page').data('page-number');
        var next_page = parseInt(current_page) + 1;
        var previous_page = parseInt(current_page) - 1;
        if (selector.hasClass('eg-previous-page')) {
            current_page = previous_page;
        } else {
            current_page = next_page;
        }

        $.ajax({
            type: 'post',
            url: eg_frontend_js_object.ajax_url,
            data: {
                action: 'eg_pagination_action',
                _wpnonce: eg_frontend_js_object.ajax_nonce,
                layout_type: layout_type,
                page_num: current_page,
                gallery_id: gallery_id
            },
            beforeSend: function (xhr) {
                selector.closest('.eg-pagination-block').find('.eg-ajax-loader').show();
            },
            success: function (response) {
                selector.closest('.eg-pagination-block').find('.eg-ajax-loader').hide();
                if (selector.closest('.eg-wrap').find('.eg-filter-wrap').length > 0) {
                    selector.closest('.eg-wrap').find('.eg-filter-trigger[data-filter-key="all"]').click();
                }


                if (layout_type == 'masonary') {
                    var masonary_id = selector.closest('.eg-masonary-wrap').find('.eg-masonary-items-wrap').data('masonary-id');
                    masonary_obj[masonary_id].isotope('destroy');
                    selector.closest('.eg-wrap').find('.eg-' + layout_type + '-items-wrap').html(response);
                    selector.closest('.eg-wrap').find('.eg-' + layout_type + '-items-wrap').imagesLoaded(function () {
                        $('.eg-masonary-items-wrap').isotope({
                            itemSelector: '.eg-each-item',
                            percentPosition: true,
                            masonry: {
                                // use element for option
                                columnWidth: '.eg-each-item'
                            }
                        });
                    });
                } else {
                    selector.closest('.eg-wrap').find('.eg-' + layout_type + '-items-wrap').html(response);
                }
                eg_initialize_lightbox();
                var pagination_html = build_pagination_html(current_page, total_page, gallery_id, layout_type);
                selector.closest('.eg-wrap').find('.eg-pagination-block ul').html(pagination_html);
            }
        });
    });

    /**
     * Everest Lightbox Initialization
     *
     * @since 1.0.0
     */
    $('body').on('click', 'a[data-lightbox-type="everest_lightbox"]', function (e) {
        var lightbox_status = $(this).closest('.eg-wrap').data('lightbox-status');
        if (lightbox_status) {
            e.preventDefault();
            var item_type = $(this).data('item-type');
            var image_title = $(this).find('img').attr('alt');
            var image_caption = $(this).attr('title');
            var item_index = $(this).data('index');
            var total_items = $(this).data('total-items');
            var gallery_id = $(this).closest('.eg-wrap').data('gallery-id');
            var lightbox_theme = $(this).closest('.eg-wrap').data('lightbox-theme');
            var lightbox_themes = ['black', 'white', 'blue', 'grey'];
            for (var i = 0; i < lightbox_themes.length; i++) {
                $('.eg-everest-lightbox-overlay').removeClass('eg-' + lightbox_themes[i] + '-lightbox');
            }
            $('.eg-everest-lightbox-overlay').addClass('eg-' + lightbox_theme + '-lightbox');
            $('.eg-everest-lightbox-previous,.eg-everest-lightbox-next').data('current-index', item_index);
            $('.eg-everest-lightbox-previous,.eg-everest-lightbox-next').data('gallery-id', gallery_id);
            $('.eg-everest-lightbox-previous,.eg-everest-lightbox-next').data('total-items', total_items);
            $('.eg-everest-lightbox-caption').html(image_title);
            $('.eg-everest-lightbox-description').html(image_caption);
            switch (item_type) {
                case 'image':
                case 'instagram':
                case 'post':
                    var image_url = $(this).attr('href');
                    $('.eg-everest-lightbox-source-holder').html('<img src="' + image_url + '"/>');

                    $('.eg-everest-lightbox-overlay').addClass('eg-overlay-active');

                    var $image_holder = $('.eg-everest-lightbox-source-holder');
                    $image_holder.imagesLoaded(function () {
                        var image_height = $('.eg-everest-lightbox-source-holder img').height();
                        var image_width = $('.eg-everest-lightbox-source-holder img').width();
                        var window_height = $(window).height();
                        var window_width = $(window).width();
                        var max_height = window_height * 0.8;
                        if (image_height > max_height) {
                            var ratio = image_width / image_height;
                            var image_width = max_height * ratio;
                            $('.eg-everest-lightbox-overlay .eg-everest-lightbox-wrap').animate({
                                width: image_width
                            }, 500);
                            $('.eg-everest-lightbox-source-holder img').animate({
                                width: image_width,
                                opacity: 1
                            }, 500);
                        } else {

                            var lightbox_width = $('.eg-everest-lightbox-overlay .eg-everest-lightbox-wrap').css('width');
                            var half_width = 0.5 * window_width;
                            if (parseInt(lightbox_width) != parseInt(half_width)) {
                                $('.eg-everest-lightbox-overlay .eg-everest-lightbox-wrap').animate({
                                    width: '50%'
                                }, 500);
                            }

                        }
                    });


                    break;
                case 'video':
                    var video_type = $(this).data('video-type');
                    var video_url = $(this).data('video-url');
                    var self_video_url = $(this).data('self-video-url');
                    switch (video_type) {
                        case 'youtube':
                            if (video_url == '') {
                                alert(eg_frontend_js_object.strings.video_missing);
                            } else {
                                video_url_array = video_url.split('?v=');
                                video_id = video_url_array.pop();
                                video_html = '<iframe width="100%" height="360" src="https://www.youtube.com/embed/' + video_id + '" frameborder="0" allowfullscreen></iframe>';
                                $('.eg-everest-lightbox-source-holder').html(video_html);
                                $('.eg-everest-lightbox-overlay').addClass('eg-overlay-active');
                            }
                            break;
                        case 'vimeo':
                            if (video_url == '') {
                                alert(eg_frontend_js_object.strings.video_missing);
                            } else {
                                video_url_array = video_url.split('/');
                                video_id = video_url_array.pop();
                                video_html = '<iframe src="https://player.vimeo.com/video/' + video_id + '" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                                $('.eg-everest-lightbox-source-holder').html(video_html);
                                $('.eg-everest-lightbox-overlay').addClass('eg-overlay-active');
                            }
                            break;
                        case 'self-hosted':
                            if (self_video_url == '') {
                                alert(eg_frontend_js_object.strings.video_missing);
                            } else {
                                video_html = '<video width="100%" height="360" controls><source src="' + self_video_url + '"></video>';
                                $('.eg-everest-lightbox-source-holder').html(video_html);
                                $('.eg-everest-lightbox-overlay').addClass('eg-overlay-active');
                            }
                            break;
                    }
                    break;
                case 'audio':
                    var audio_type = $(this).data('audio-type');
                    var audio_url = $(this).data('audio-url');
                    var self_audio_url = $(this).data('self-audio-url');
                    switch (audio_type) {
                        case 'soundcloud':
                            if (audio_url == '') {
                                alert(eg_frontend_js_object.strings.audio_missing);
                            } else {
                                audio_html = ' <iframe width="100%" scrolling="no" frameborder="no" src="' + audio_url + '"></iframe>';
                                $('.eg-everest-lightbox-source-holder').html(audio_html);
                                $('.eg-everest-lightbox-overlay').addClass('eg-overlay-active');
                            }
                            break;
                        case 'self-hosted':
                            if (self_audio_url == '') {
                                alert(eg_frontend_js_object.strings.audio_missing);
                            } else {
                                audio_html = '<audio width="100%" height="360" controls><source src="' + self_audio_url + '"></audio>';
                                $('.eg-everest-lightbox-source-holder').html(audio_html);
                                $('.eg-everest-lightbox-overlay').addClass('eg-overlay-active');
                            }
                            break;
                    }
                    break;
            }
        }
    });

    /**
     * Everst Lightbox initialization
     *
     * @since 1.0.0
     */
    $('.eg-everest-lightbox-overlay .eg-close-pop-up').click(function () {
        $('.eg-everest-lightbox-overlay').removeClass('eg-overlay-active');
        setTimeout(function () {
            $('.eg-everest-lightbox-source-holder').html('');
        }, 500)
        //  $('.eg-everest-lightbox-overlay').hide();
    });

    /**
     * Everest Lightbox Previous Trigger
     *
     * @since 1.0.0
     */
    $('.eg-everest-lightbox-previous').click(function () {
        var current_index = $(this).data('current-index');
        var total_items = $(this).data('total-items');
        var previous_index = parseInt(current_index) - 1;
        var click_index = (previous_index < 1) ? total_items : previous_index;
        var gallery_id = $(this).data('gallery-id');
        $('.eg-wrap[data-gallery-id="' + gallery_id + '"] a[data-index="' + click_index + '"]').click();
    });

    /**
     * Everest Lightbox Next Trigger
     *
     * @since 1.0.0
     */
    $('.eg-everest-lightbox-next').click(function () {

        var current_index = $(this).data('current-index');
        var total_items = $(this).data('total-items');
        var next_index = parseInt(current_index) + 1;
        var click_index = (next_index > total_items) ? 1 : next_index;
        var gallery_id = $(this).data('gallery-id');
        $('.eg-wrap[data-gallery-id="' + gallery_id + '"] a[data-index="' + click_index + '"]').click();
    });

    $('.eg-everest-lightbox-inner-overlay').click(function () {
        $('.eg-everest-lightbox-overlay .eg-close-pop-up').click();
    });



});
