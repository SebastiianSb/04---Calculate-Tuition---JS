const userName = document.getElementById('name')
        const password = document.getElementById('password')
        const id = document.getElementById('id')
        const courseName = document.getElementById('course')
        const creditsAmount = document.getElementById('credits')
        const stratum = document.getElementById('stratum')
        const certificate = document.getElementById('cert')
        const btnLogin = document.getElementById('btn-login')

        const container = document.querySelector('.container')
        const simulator = document.querySelector('.simulator')
        const results = document.querySelector('.results')
        const price = 123000

        const nameOut = document.getElementById('res-name')
        const idOut = document.getElementById('res-id')
        const courseOut = document.getElementById('res-course')
        const totalPriceOut = document.getElementById('res-amount')
        const creditsCountOut = document.getElementById('res-credits')
        const socialStratumOut = document.getElementById('res-social')
        const certificateOut = document.getElementById('res-certificate')
        const moneySave = document.getElementById('money-saved')

        const btnRegister = document.getElementById('btn-register')
        const btnClose = document.getElementById('btn-close')

        btnLogin.addEventListener('click', () => {

            if (password.value == 123) {

                simulator.style.display = 'block'

                container.style.display = 'none'

            } else {
                alert("Contraseña Incorrecta")
            }
        })

        btnRegister.addEventListener('click', function () {

            const creditsValue = Number(creditsAmount.value)
            const stratumValue = Number(stratum.value)

            if((creditsValue < 1 || creditsValue > 21 || stratumValue < 1 || stratumValue > 6)){

                alert("Porfavor ingrese valores correctos")
                return
            }

            results.style.display = 'block'
            document.querySelector('.simulator').style.display = 'none'

            nameOut.textContent = userName.value
            courseOut.textContent = courseName.value
            creditsCountOut.textContent = creditsAmount.value
            socialStratumOut.textContent = stratum.value
            certificateOut.textContent = certificate.value
            idOut.textContent = id.value
            calculateTuition()
        })
        

    function calculateTuition() {

        const stratum2 = Number(stratum.value)
        const credits = Number(creditsAmount.value)

        
        let discountCertificate = 0

        const priceCredit = price

        const subTotal = (credits * priceCredit)

        const hasCertificate = certificate.value 

        if(hasCertificate === 'Yes'){
            discountCertificate = subTotal * 0.10
        }

        const firstTotal = subTotal - discountCertificate

        let discountStratum = 0

            switch(stratum2){
            case 1:
            case 2:
                discountStratum = firstTotal * 0.15
                break;
            case 3:
            case 4:
                discountStratum = firstTotal * 0.10
                break;
            case 5:
            case 6:
                discountStratum = firstTotal * 0.05
                break;
            default: 
                discountStratum = "Invalid Stratum"
            }

        const finalTotal = firstTotal - discountStratum

        const discount = discountStratum + discountCertificate

        totalPriceOut.textContent = finalTotal
        moneySave.textContent = discount
        
    }

    btnClose.addEventListener('click', () => {
        results.style.display = 'none'
        document.querySelector('.container').style.display = 'block'

        document.getElementById('name').value = ''
        document.getElementById('id').value = ''
        document.getElementById('password').value = ''

        document.getElementById('course').value = ''
        document.getElementById('credits').value = ''
        document.getElementById('stratum').value = ''

    })
    