/**
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this module to newer
 * versions in the future.
 *
 *
 * @category  Smile
 * @package   Smile\Map
 * @author    Ihor KVASNYTSKYI <ihor.kvasnytskyi@smile-ukraine.com>
 * @copyright 2019 Smile
 * @license   Open Software License ("OSL") v. 3.0
 */
/*global define*/
define([
    'jquery',
    'smile-map'
], function ($) {
    'use strict';
    $.widget('smile.mapMobile', {

        _create: function () {
            var btnShowList = $('#display-store-list-mobile');
            var btnShowMap  = $('#display-store-map-mobile');
            var map  = $('.map');

            btnShowMap.on('click', function(e) {
                e.preventDefault();
                this.showMap(btnShowMap, btnShowList, map);
            }.bind(this));

            btnShowList.on('click', function(e) {
                e.preventDefault();
                this.showList(btnShowMap, btnShowList, map);
            }.bind(this));
        },

        showMap: function (btnShowMap, btnShowList, map) {
            map.addClass('map-open')
            btnShowMap.addClass('active');
            btnShowList.removeClass('active');
        },

        showList: function (btnShowMap, btnShowList, map) {
            map.removeClass('map-open')
            btnShowMap.removeClass('active');
            btnShowList.addClass('active');
        }
    });

    return $.smile.mapMobile;
});