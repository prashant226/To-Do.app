# used for running the extension in E2E tests

FROM gitpod/openvscode-server:latest

### this attempt to install the extension globally doesn't work currently and is left here for future attempt to reconcile the issue
ENV OPENVSCODE_SERVER_ROOT="/home/.openvscode-server"
ENV OPENVSCODE="${OPENVSCODE_SERVER_ROOT}/bin/openvscode-server"
RUN mkdir -p /tmp/exts
COPY ./src/test/suite/test_data/sample_workspace/dist/codium.e2e.vsix ./tmp/exts/codium.vsix
RUN ${OPENVSCODE} --install-extension "./tmp/exts/codium.vsix"
ENTRYPOINT []
USER root
CMD  [ "/bin/sh", "-c", "exec ${OPENVSCODE_SERVER_ROOT}/bin/openvscode-server --host 0.0.0.0 --user-data-dir=/home/workspace/ --disable-workspace-trust=true --without-connection-token \"${@}\"", "--" ]