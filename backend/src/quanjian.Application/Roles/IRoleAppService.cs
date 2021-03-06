﻿using System.Threading.Tasks;
using Abp.Application.Services;
using quanjian.Roles.Dto;

namespace quanjian.Roles
{
    public interface IRoleAppService : IApplicationService
    {
        Task UpdateRolePermissions(UpdateRolePermissionsInput input);
    }
}
