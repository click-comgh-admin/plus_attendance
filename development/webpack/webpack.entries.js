module.exports = {
    "login": {
        import: './src/view/wireframe/index.ts',
        dependOn: 'shared',
    },
    "login": {
        import: './src/view/login/index.ts',
        dependOn: 'shared',
    },
    "redirect": {
        import: './src/view/redirect/index.ts',
        dependOn: 'shared',
    },
    "home/branch": {
        import: './src/view/home/branch/index.ts',
        dependOn: 'shared',
    },
    "home/branch/btn": {
        import: './src/view/home/branch/button.ts',
        dependOn: 'shared',
    },
    "home/dashboard": {
        import: './src/view/home/dashboard/index.ts',
        dependOn: 'shared',
    },
    "attendance/devices/requests": {
        import: './src/view/attendance/devices/requests/index.ts',
        dependOn: 'shared',
    },
    "attendance/devices/settings": {
        import: './src/view/attendance/devices/settings/index.ts',
        dependOn: 'shared',
    },
    "attendance/clocking/clocker": {
        import: './src/view/attendance/clocking/clocker/index.ts',
        dependOn: 'shared',
    },
    "attendance/clocking/attendees": {
        import: './src/view/attendance/clocking/attendees/index.ts',
        dependOn: 'shared',
    },
    "attendance/clocking/absentees": {
        import: './src/view/attendance/clocking/absentees/index.ts',
        dependOn: 'shared',
    },
    "attendance/clocking/history": {
        import: './src/view/attendance/clocking/history/index.ts',
        dependOn: 'shared',
    },
    "attendance/clocking/history-one": {
        import: './src/view/attendance/clocking/history/one.ts',
        dependOn: 'shared',
    },
    "attendance/clocking/excuse": {
        import: './src/view/attendance/excuse/index.ts',
        dependOn: 'shared',
    },
    "attendance/clocking/follow_up": {
        import: './src/view/attendance/follow_up/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-view": {
        import: './src/view/attendance/setup/form/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form": {
        import: './src/view/attendance/setup/form/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/edit-admin": {
        import: './src/view/attendance/setup/form/edit/admin/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/edit-attachment": {
        import: './src/view/attendance/setup/form/edit/attachment/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/add-agenda": {
        import: './src/view/attendance/setup/form/edit/agenda/add.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/edit-agenda": {
        import: './src/view/attendance/setup/form/edit/agenda/edit.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/view-agenda": {
        import: './src/view/attendance/setup/schedules/views/agenda/one.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/list-agendas": {
        import: './src/view/attendance/setup/schedules/views/agenda/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/edit-break": {
        import: './src/view/attendance/setup/form/edit/break/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/edit-date": {
        import: './src/view/attendance/setup/form/edit/date/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/edit-day": {
        import: './src/view/attendance/setup/form/edit/day/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/edit-group": {
        import: './src/view/attendance/setup/form/edit/group/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/edit-location": {
        import: './src/view/attendance/setup/form/edit/location/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/edit-member": {
        import: './src/view/attendance/setup/form/edit/member/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/edit-sms": {
        import: './src/view/attendance/setup/form/edit/sms/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/edit-schedule": {
        import: './src/view/attendance/setup/form/edit/schedule/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-form/edit-sub_group": {
        import: './src/view/attendance/setup/form/edit/subgroup/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-view/schedules": {
        import: './src/view/attendance/setup/schedules/index.ts',
        dependOn: 'shared',
    },
    "attendance/setup-view/schedule": {
        import: './src/view/attendance/setup/schedules/one.ts',
        dependOn: 'shared',
    },

    "attendance/absent-leave/status/add": {
        import: './src/view/attendance/absent_leave/status/add.ts',
        dependOn: 'shared',
    },
    "attendance/absent-leave/status/view": {
        import: './src/view/attendance/absent_leave/status/view.ts',
        dependOn: 'shared',
    },
    "attendance/absent-leave/status/edit": {
        import: './src/view/attendance/absent_leave/status/edit.ts',
        dependOn: 'shared',
    },
    "attendance/absent-leave/assignment/add": {
        import: './src/view/attendance/absent_leave/assignment/add.ts',
        dependOn: 'shared',
    },
    "attendance/absent-leave/assignment/view": {
        import: './src/view/attendance/absent_leave/assignment/view.ts',
        dependOn: 'shared',
    },
    "attendance/absent-leave/assignment/edit": {
        import: './src/view/attendance/absent_leave/assignment/edit.ts',
        dependOn: 'shared',
    },

    shared: 'lodash',
};