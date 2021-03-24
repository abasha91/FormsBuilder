const FORMS_DATA = [
    // {
    //     id: '',
    //     title: '+ Add New Form',
    //     linkUrl: 'newform',
    //     fields: []
    // },
    {
        id: 1,
        title: 'Sign In',
        linkUrl: 'formview',
        fields: [
            {
                id: 1,
                label: 'UserName',
                type: 'text',
                required: true,
                order:0
            },
            {
                id: 2,
                label: 'Password',
                type: 'password',
                required: true,
                order:1
            },
            {
                id: 3,
                label: 'Remember Me',
                type: 'checkbox',
                required: false,
                order:1
            }
        ]
    },
    {
        id: 2,
        title: 'Address',
        linkUrl: 'formview',
        fields: [
            {
                id: 4,
                label: 'Street',
                type: 'text',
                required:true,
                order:1
            },
            {
                id: 5,
                label: 'Apt#',
                type: 'text',
                required: false,
                order:2
            },
            {
                id: 6,
                label: 'City',
                type: 'text',
                required: true,
                order:3
            },
            {
                id: 7,
                label: 'State',
                type: 'text',
                required: true,
                order:4
            }
        ]
    }
]

export default FORMS_DATA;