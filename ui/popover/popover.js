/**
 *
 * @author hry_588@163.com
 * 
 */

define(function(require, exports, module) {

	'use strict';

	var $ = require('jquery');

	var defaults = {

		// string
		title: 'title',

		// string
		content: '...',

		// string top, left, right, bottom
		placement: 'bottom'

	};

	var popover = function(selectol, options) {

		var _this = $(selectol),
			position = coordinate(_this),
			opt = $.extend(defaults, options),
			isShow = false,
			placement = opt.placement,
			title = opt.title,
			hd = '';


		if (opt.title != '') {
			hd = '<div class="ui-popover-hd">' + title + '</div>';
		}

		var html = '<div class="ui-popover ui-fadeInUp ' + placement + '">' + hd +
			'<div class="ui-popover-bd">' + opt.content + '</div>' +
			'<div class="ui-popover-ft"></div>' +
			'</div>';

		var slef = $(html);

		slef.appendTo('body');

		var w = slef.innerWidth(),
			h = slef.innerHeight();

		if (placement == 'bottom') {
			slef.css({
				top: position.bottom + 11,
				left: position.left + (position.width / 2) - (w / 2)
			})
		}

		if (placement == 'top') {
			slef.css({
				top: position.top - 13 - h,
				left: position.left + (position.width / 2) - (w / 2)
			})
		}

		if (placement == 'right') {
			slef.css({
				top: position.top + position.height / 2 - h / 2,
				left: position.right + 13
			})
		}

		if (placement == 'left') {
			slef.css({
				top: position.top + position.height / 2 - h / 2,
				left: position.left - w - 13
			})
		}

		

		this.selectol = slef;

		
	}


	// 关闭弹出层
	popover.prototype.close = function() {
		var _this = this.selectol;
		_this.addClass('ui-fadeOutDown');
		setTimeout(function() {
			_this.remove();
		}, 500)
	}

	function coordinate(selectol) {
		var _this = selectol,
			width = _this.innerWidth(),
			height = _this.innerHeight(),
			offset = _this.offset();

		return {
			left: offset.left,
			right: offset.left + width,
			top: offset.top,
			bottom: offset.top + height,
			width: width,
			height: height
		}
	}

	module.exports = popover;

	//根据业务自己封装
	//点击显示与隐藏
	$.fn.popover = function(options) {
		var slef = this;
		slef.attr('ispopover', 'false');
		slef.each(function(index, item) {
			var pop = [];
			$(item).on('click.ui-popover', function() {
				var _this = $(this);
				if (_this.attr('ispopover') == 'false') {

					pop[index] = new popover(_this, options);
					_this.attr('ispopover', 'true');
					return
				}
				pop[index].close();
				_this.attr('ispopover', 'false');

			})
		})
	}


	var p = function(selectol) {
		if (this instanceof p) {
			this.selectol = selectol;
		} else {
			return new p(selectol)
		}
	}

	p.prototype.show = function() {
		$(this.selectol).css('background', ' #ccc');
		return this;
	}
	p.prototype.hide = function() {
		$(this.selectol).css('border', '2px solid #ddd')
	}

	//p('body').show().hide();
})