"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var eventService_1 = require("../eventService");
var context_1 = require("../context/context");
var events_1 = require("../events");
var beanStub_1 = require("../context/beanStub");
var columnController_1 = require("../columnController/columnController");
var gridApi_1 = require("../gridApi");
var ColumnHoverService = /** @class */ (function (_super) {
    __extends(ColumnHoverService, _super);
    function ColumnHoverService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnHoverService.prototype.init = function () {
        this.addDestroyableEventListener(this.eventService, events_1.Events.EVENT_CELL_MOUSE_OVER, this.onCellMouseOver.bind(this));
        this.addDestroyableEventListener(this.eventService, events_1.Events.EVENT_CELL_MOUSE_OUT, this.onCellMouseOut.bind(this));
    };
    ColumnHoverService.prototype.onCellMouseOver = function (cellEvent) {
        this.currentlySelectedColumn = cellEvent.column;
        var event = {
            type: events_1.Events.EVENT_COLUMN_HOVER_CHANGED,
            api: this.gridApi,
            columnApi: this.columnApi
        };
        this.eventService.dispatchEvent(event);
    };
    ColumnHoverService.prototype.onCellMouseOut = function () {
        this.currentlySelectedColumn = null;
        var event = {
            type: events_1.Events.EVENT_COLUMN_HOVER_CHANGED,
            api: this.gridApi,
            columnApi: this.columnApi
        };
        this.eventService.dispatchEvent(event);
    };
    ColumnHoverService.prototype.isHovered = function (column) {
        return column == this.currentlySelectedColumn;
    };
    __decorate([
        context_1.Autowired('eventService'),
        __metadata("design:type", eventService_1.EventService)
    ], ColumnHoverService.prototype, "eventService", void 0);
    __decorate([
        context_1.Autowired('columnApi'),
        __metadata("design:type", columnController_1.ColumnApi)
    ], ColumnHoverService.prototype, "columnApi", void 0);
    __decorate([
        context_1.Autowired('gridApi'),
        __metadata("design:type", gridApi_1.GridApi)
    ], ColumnHoverService.prototype, "gridApi", void 0);
    __decorate([
        context_1.PostConstruct,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ColumnHoverService.prototype, "init", null);
    ColumnHoverService = __decorate([
        context_1.Bean('columnHoverService')
    ], ColumnHoverService);
    return ColumnHoverService;
}(beanStub_1.BeanStub));
exports.ColumnHoverService = ColumnHoverService;
