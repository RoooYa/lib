/**
 * jquery reqiest
 *
 *
 * email: hry_588@163.com
 * Date: 2016-03-05
 */
define(function(require, exports, module) {
    'use strict';

    var $ = require('jquery');


    var io = {};

    $.each(['get', 'post', 'jsonp'], function(i, v) {
        io[v] = function(url, datas, success, fail) {
            if (typeof datas == 'function') {
                fail = success;
                success = datas;
                datas = undefined;
            }

            // 如果是jsonp请求url自动带上callback
            if (v == 'jsonp') {
                v = 'getJSON';
                url = url + '?callback=?'
            }

            $[v](url, datas, function(data) {
                data.code == 0 ? success && success(data) : fail && fail(data);
            })
        }
    })

    module.exports = io;

});