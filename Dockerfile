FROM quay.io/keycloak/keycloak:26.8.1
ENV KC_HEALTH_ENABLED=true
COPY realm/eventbank-realm.json /opt/keycloak/data/import/eventbank-realm.json
ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
CMD ["start-dev", "--import-realm"]
