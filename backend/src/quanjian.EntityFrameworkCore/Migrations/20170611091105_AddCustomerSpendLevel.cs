using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace quanjian.Migrations
{
    public partial class AddCustomerSpendLevel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsVip",
                table: "Customers");

            migrationBuilder.CreateTable(
                name: "CustomerSpendLevelLogs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: true),
                    CustomerId = table.Column<int>(nullable: true),
                    NewLevel = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    NewSpend = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    OldLevel = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    OldSpend = table.Column<decimal>(type: "decimal(16,4)", nullable: false),
                    Remark = table.Column<string>(maxLength: 200, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerSpendLevelLogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CustomerSpendLevelLogs_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.AddColumn<decimal>(
                name: "Level",
                table: "Customers",
                type: "decimal(16,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "Spend",
                table: "Customers",
                type: "decimal(16,4)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "VipType",
                table: "Customers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_CustomerSpendLevelLogs_CustomerId",
                table: "CustomerSpendLevelLogs",
                column: "CustomerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Level",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "Spend",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "VipType",
                table: "Customers");

            migrationBuilder.DropTable(
                name: "CustomerSpendLevelLogs");

            migrationBuilder.AddColumn<bool>(
                name: "IsVip",
                table: "Customers",
                nullable: false,
                defaultValue: false);
        }
    }
}
