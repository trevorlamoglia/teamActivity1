class Alert {
    constructor (){

    }

    async getAlerts(){
        let alerts = [];
        await fetch("../json/alerts.json")
            .then(response => response.json())
                .then(response => response.map(res => alerts.push(res)))

        return alerts;
    }

     async createAlert(){
        const alertsQuantity =  await this.getAlerts();

        if (alertsQuantity.length > 0){
            alertsQuantity.forEach(element => {
                const section = document.createElement('section');
                const p = document.createElement('p');

                section.style.background = element.background;
                p.innerHTML = element.message;
                p.style.color = element.color;
                
                section.append(p);

                document.querySelector('main').prepend(section);
            });
        }

    }

    appendAlert(){
        document.querySelector('main').prepend = this.createAlert();
    }   
}


export default Alert;