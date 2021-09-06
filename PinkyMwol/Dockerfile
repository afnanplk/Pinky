FROM fusuf/whatsasena:latest

RUN git clone https://afnanplk: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@github.com/afnanplk/Pinky_V /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN git clone https://github.com/afnanplk/uploads
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit


CMD ["node", "bot.js"]
