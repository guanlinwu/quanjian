using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace quanjian.Migrations
{
    public partial class initial_QuanJianDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    DeleterUserId = table.Column<long>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsVip = table.Column<bool>(nullable: false),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierUserId = table.Column<long>(nullable: true),
                    Money = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    Name = table.Column<string>(maxLength: 10, nullable: false),
                    Number = table.Column<string>(maxLength: 20, nullable: false),
                    Phone = table.Column<string>(maxLength: 20, nullable: false),
                    Point = table.Column<decimal>(type: "decimal(16,4)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    Amount = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    DeleterUserId = table.Column<long>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    ExchangePoint = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierUserId = table.Column<long>(nullable: true),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    Number = table.Column<string>(maxLength: 20, nullable: false),
                    Point = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    PointRate = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    Size = table.Column<string>(maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CustomerLogs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    CustomerId = table.Column<int>(nullable: true),
                    NewIsVip = table.Column<bool>(nullable: false),
                    NewName = table.Column<string>(maxLength: 10, nullable: true),
                    NewNumber = table.Column<string>(maxLength: 20, nullable: true),
                    NewPhone = table.Column<string>(maxLength: 20, nullable: true),
                    OldIsVip = table.Column<bool>(nullable: false),
                    OldName = table.Column<string>(maxLength: 10, nullable: true),
                    OldNumber = table.Column<string>(maxLength: 20, nullable: true),
                    OldPhone = table.Column<string>(maxLength: 20, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerLogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CustomerLogs_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CustomerMoneyLogs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    CustomerId = table.Column<int>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Variable = table.Column<decimal>(type: "decimal(16,4)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerMoneyLogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CustomerMoneyLogs_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    CustomerId = table.Column<int>(nullable: true),
                    DeleterUserId = table.Column<long>(nullable: true),
                    DeletionTime = table.Column<DateTime>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    LastModificationTime = table.Column<DateTime>(nullable: true),
                    LastModifierUserId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProductAmountLogs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    ProductId = table.Column<int>(nullable: true),
                    Variable = table.Column<decimal>(type: "decimal(16,4)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductAmountLogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductAmountLogs_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProductLogs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    NewExchangePoint = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    NewName = table.Column<string>(maxLength: 50, nullable: true),
                    NewNumber = table.Column<string>(maxLength: 20, nullable: true),
                    NewPoint = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    NewPointRate = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    NewPrice = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    NewSize = table.Column<string>(maxLength: 20, nullable: true),
                    OldExchangePoint = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    OldName = table.Column<string>(maxLength: 50, nullable: true),
                    OldNumber = table.Column<string>(maxLength: 20, nullable: true),
                    OldPoint = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    OldPointRate = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    OldPrice = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    OldSize = table.Column<string>(maxLength: 20, nullable: true),
                    ProductId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductLogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductLogs_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CustomerPointLogs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    CustomerId = table.Column<int>(nullable: true),
                    OrderId = table.Column<int>(nullable: true),
                    Variable = table.Column<decimal>(type: "decimal(16,4)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerPointLogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CustomerPointLogs_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CustomerPointLogs_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ChildOrders",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    Count = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    OrderId = table.Column<int>(nullable: true),
                    Price = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    ProductId = table.Column<int>(nullable: true),
                    TotalPrice = table.Column<decimal>(type: "decimal(16,4)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChildOrders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChildOrders_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ChildOrders_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CustomerLogs_CustomerId",
                table: "CustomerLogs",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerMoneyLogs_CustomerId",
                table: "CustomerMoneyLogs",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerPointLogs_CustomerId",
                table: "CustomerPointLogs",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerPointLogs_OrderId",
                table: "CustomerPointLogs",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_CustomerId",
                table: "Orders",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductAmountLogs_ProductId",
                table: "ProductAmountLogs",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductLogs_ProductId",
                table: "ProductLogs",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_ChildOrders_OrderId",
                table: "ChildOrders",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_ChildOrders_ProductId",
                table: "ChildOrders",
                column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CustomerLogs");

            migrationBuilder.DropTable(
                name: "CustomerMoneyLogs");

            migrationBuilder.DropTable(
                name: "CustomerPointLogs");

            migrationBuilder.DropTable(
                name: "ProductAmountLogs");

            migrationBuilder.DropTable(
                name: "ProductLogs");

            migrationBuilder.DropTable(
                name: "ChildOrders");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}
