new Vue({
    el: '#app',
    data: {
        form: {
            name: '',
            surname: '',
            email: '',
            phone: '',
            region: [],
            gender: '',
            reasons: [],
            message: ''
        },
        errors: {
            name: '',
            surname: '',
            email: '',
            phone: '',
            region: '',
            gender: '',
            reasons: '',
            message: ''
        },
        displayData: {
            name: '',
            surname: '',
            email: '',
            phone: '',
            region: [],
            gender: '',
            reasons: [],
            message: ''
        },
        submitted: false
    },
    methods: {
        validateName() {
            if (!this.form.name) {
                this.errors.name = 'Ad gereklidir.';
            } else {
                this.errors.name = '';
            }
        },
        validateSurname() {
            if (!this.form.surname) {
                this.errors.surname = 'Soyad gereklidir.';
            } else {
                this.errors.surname = '';
            }
        },
        validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.form.email) {
                this.errors.email = 'E-posta gereklidir.';
            } else if (!emailPattern.test(this.form.email)) {
                this.errors.email = 'Geçerli bir e-posta adresi girin.';
            } else {
                this.errors.email = '';
            }
        },
        validatePhone() {
            if (!this.form.phone) {
                this.errors.phone = 'Telefon numarası girmek zorunludur.';
            } else if (!this.form.phone.match(/^[0-9]{10}$/)) {
                this.errors.phone = 'Telefon numarası 10 haneli olmalıdır.';
            } else {
                this.errors.phone = '';
            }
        },
        validateRegion() {
            if (this.form.region.length === 0) {
                this.errors.region = 'Bir bölge seçmek zorunludur.';
            } else {
                this.errors.region = '';
            }
        },
        validateGender() {
            if (!this.form.gender) {
                this.errors.gender = 'Cinsiyet seçmek zorunludur.';
            } else {
                this.errors.gender = '';
            }
        },
        validateReasons() {
            if (this.form.reasons.length === 0) {
                this.errors.reasons = 'En az bir sebep seçmek zorunludur.';
            } else {
                this.errors.reasons = '';
            }
        },
        validateMessage() {
            if (!this.form.message) {
                this.errors.message = 'Mesaj gereklidir.';
            } else {
                this.errors.message = '';
            }
        },
        validateForm(){
            if(!this.form.name || !this.form.surname|| !this.form.email || !emailPattern.test(this.form.email) || !this.form.phone ||!this.form.phone.match(/^[0-9]{10}$/)||
            this.form.region.length === 0|| !this.form.gender || this.form.reasons.length === 0  || !this.form.message){
                this.errors.form = 'Hataları düzeltiniz.';
            }

        },
        clearForm() {
            this.form = {
                name: '',
                surname: '',
                email: '',
                phone: '',
                region: [],
                gender: '',
                reasons: [],
                message: ''
            };
            this.errors = {
                name: '',
                surname: '',
                email: '',
                phone: '',
                region: '',
                gender: '',
                reasons: '',
                message: ''
            };
            this.submitted = false;
        },
        handleSubmit() {
            this.validateName();
            this.validateSurname();
            this.validateEmail();
            this.validatePhone();
            this.validateRegion();
            this.validateGender();
            this.validateReasons();
            this.validateMessage();

            if (!Object.values(this.errors).some(error => error)) {
                this.displayData = { ...this.form };
                this.submitted = true;
            }
        }
        
    }
});
