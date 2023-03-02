RUN:=yarn

# LIBS #
UI:=ui
SETUP:=setup
DESIGN:=design
SERVICES:=services
BUSINESS:=business

# WEB #
SSO:=sso

# ------------------------------------------------------------------------------------ #

define run_in_workspace
	@echo --------------------------
	@echo $(1) - $(2)
	@echo --------------------------
	$(RUN) workspace @client/$(1) $(2)
endef

setup:
	make clean-all
	make install
	make build-all

install:
	yarn

install-immutable:
	yarn install --immutable

# ------------------- DEV ------------------- #

dev-ui:
	$(call run_in_workspace,$(UI),storybook)

dev-sso:
	$(call run_in_workspace,$(SSO),start)

# ------------------ BUILD ------------------ #

build-ui:
	$(call run_in_workspace,$(UI),build)

build-setup:
	$(call run_in_workspace,$(SETUP),build:prod)

build-services:
	$(call run_in_workspace,$(SERVICES),build:prod)

build-business:
	$(call run_in_workspace,$(BUSINESS),build:prod)

build-design:
	$(call run_in_workspace,$(DESIGN),build:default)

build-dependencies: build-design build-setup build-services build-business build-ui

build-sso:
	$(call run_in_workspace,$(SSO),build)

build-all: build-dependencies build-sso

# ------------------ WATCH ------------------ #

watch-design:
	$(call run_in_workspace,$(DESIGN),watch)

watch-setup:
	$(call run_in_workspace,$(SETUP),build:watch)

watch-services:
	$(call run_in_workspace,$(SERVICES),build:watch)

watch-business:
	$(call run_in_workspace,$(BUSINESS),build:watch)

watch-ui:
	$(call run_in_workspace,$(UI),watch)

# ------------------ CLEAR ------------------ #

define delete_build
	@echo delete_build $(1)
	rm -Rf ./packages/$(1)/dist
endef

clean-builds:
	$(call delete_build,shared/$(UI))
	$(call delete_build,shared/$(DESIGN))

define delete_dependencies
	@echo delete_dependencies $(1)
	rm -Rf ./packages/$(1)/node_modules
endef

clean-dependencies:
	rm -Rf ./node_modules
	$(call delete_dependencies,shared/$(UI))
	$(call delete_dependencies,shared/$(BUSINESS))
	$(call delete_dependencies,shared/$(SERVICES))
	$(call delete_dependencies,shared/$(DESIGN))
	$(call delete_dependencies,projects/$(SSO))

clean-all: clean-dependencies clean-builds

# ------------------ TEST ------------------ #

test-ui:
	$(call run_in_workspace,$(UI),test)

test-setup:
	$(call run_in_workspace,$(SETUP),test)

test-services:
	$(call run_in_workspace,$(SERVICES),test)

test-business:
	$(call run_in_workspace,$(BUSINESS),test)

# ------------------ LINT ------------------ #

lint:
	$(call run_in_workspace,$(UI),lint)
	$(call run_in_workspace,$(SSO),lint)
	$(call run_in_workspace,$(SETUP),lint)
	$(call run_in_workspace,$(SERVICES),lint)

# ------------------ Lighthouse CI ------------------ #